import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { sendEnquiryNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limit by IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse & validate body
    const body = await req.json();
    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // 3. Honeypot check — silently accept to not tip off bots
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    // 4. TODO: Insert into Supabase once wired
    // await supabase.from("enquiries").insert({ ... });

    // 5. Send notification email
    await sendEnquiryNotification({
      name: data.name,
      company: data.company || undefined,
      email: data.email,
      phone: data.phone,
      product: data.product || undefined,
      message: data.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log server-side only — never leak internals to client
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

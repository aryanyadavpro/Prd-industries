import { NextResponse } from "next/server";

export async function POST() {
  // TODO: validate body → rate limit → insert Supabase → send email
  return NextResponse.json({ success: true }, { status: 200 });
}

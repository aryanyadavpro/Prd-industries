import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "PRD Industries — Industrial Products",
  description:
    "Browse our catalog of industrial products and request a quote. Quality components for manufacturing and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

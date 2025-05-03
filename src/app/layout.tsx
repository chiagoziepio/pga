import { montserrat, openSans } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Putting Green Austin | services",
  description:
    "No matter the size or setting, we can build a green that fits. Whether you’re perfecting your putt or impressing your guests, this feature adds luxury and fun to any property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

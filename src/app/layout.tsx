import { montserrat, openSans, playFair } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

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
        className={`${openSans.variable} ${montserrat.variable} ${playFair.variable} antialiased overflow-x-hidden bg-[url('/pga-hero2.jpg')] bg-cover  bg-center bg-fixed bg-no-repeat `}
      >
        <Header />
        <AntdRegistry>
          {children}
          <Toaster />
        </AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}

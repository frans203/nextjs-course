import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { cn } from "@/helpers/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("text-slate-300 bg-slate-890", inter.className)}>
        <Navbar />
        <div className={cn("ml-72")}>{children}</div>
      </body>
    </html>
  );
}

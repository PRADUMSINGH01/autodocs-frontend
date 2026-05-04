import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Docs - Merge your repo, get automatic docs",
  description: "Seamless, automated documentation for your codebases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
        <ToastProvider>
          <Suspense fallback={null}>
            <AuthProvider>
              {children}
            </AuthProvider>
          </Suspense>
        </ToastProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
/* import { Footer } from "@/components/ui/Footer"; */

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quasar Node",
  description: "Connect to our blazing-fast Solana RPC nodes and experience instant transactions across multiple locations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Header from "@/components/layout/Header";

import "reactflow/dist/style.css";
import "./globals.css";
import SidePanel from "@/components/layout/sidebars/SidePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot Flow Builder",
  description: "Build chat-bot flows with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-h-screen`}>
        <Providers>
          <Header />
          <div className="flow-builder">
            {children}
            <SidePanel />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import NodesPanel from "@/components/layout/sidebars/NodesPanel";
import Header from "@/components/layout/Header";
import SettingsPanel from "@/components/layout/sidebars/SettingsPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot Flow Builder",
  description: "Build chatbot flows with ease",
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
            <NodesPanel />
            {children}
            <SettingsPanel />
          </div>
        </Providers>
      </body>
    </html>
  );
}

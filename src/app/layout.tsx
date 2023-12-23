import type { Metadata } from "next";
import "./globals.css";
import TRPCProvider from "@/components/trpc-provider";

export const metadata: Metadata = {
  title: "Webapp Template",
  description: "by MorrisseyBR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="m-auto h-screen max-w-screen-sm">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}

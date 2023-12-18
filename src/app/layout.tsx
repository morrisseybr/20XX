import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <header className="mb-4 flex items-center justify-between p-4">
          <h1>
            <Link href="/">20XX</Link>
          </h1>
          <div className="avatar placeholder">
            <div className="w-8 rounded-full bg-neutral text-neutral-content">
              <span className="text-xs">UI</span>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}

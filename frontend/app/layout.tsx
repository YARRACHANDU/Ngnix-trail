import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/login">Login</Link> |{" "}
          <Link href="/register">Register</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
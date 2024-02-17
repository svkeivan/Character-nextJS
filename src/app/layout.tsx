import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Character Test",
  description: "Vahid Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen items-center justify-center bg-red-300">
        {children}
      </body>
    </html>
  );
}

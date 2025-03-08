import type { Metadata } from "next";
import localFont from "next/dist/compiled/@next/font/dist/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Usability checker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}

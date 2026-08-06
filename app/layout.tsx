import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne-src",
});

export const metadata: Metadata = {
  title: "Pustelak",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={syne.variable}>
      <body className="m-0 bg-background text-foreground">{children}</body>
    </html>
  );
}

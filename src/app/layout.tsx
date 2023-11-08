import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header/Header";

export const metadata: Metadata = {
  title: "Farada",
  description: "Fjs-diploma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body>
        <Header />
        <div className="mx-36">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header/Header";
import Navbar from "./ui/navbar/Navbar";

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
        <div className="mx-10 mt-12 grid grid-cols-[1fr_7fr] gap-10">
          <Navbar />
          <main className="p-default border border-gray_lite rounded-default bg-gray">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

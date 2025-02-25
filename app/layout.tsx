import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Witcher Project",
  description: "Test task",
};

const futuraPt = localFont({
  src: [
    {
      path: "../public/fonts/futura_pt_book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura_pt_demi.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-futura-pt",
  display: "swap", 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={futuraPt.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

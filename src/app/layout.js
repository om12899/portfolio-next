import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Icon from "@/assets/card.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meta = {
  title: "Om Thakkar",
  description: "Creating inclusive experiences, pixel by pixel",
};
export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    siteName: "Om Thakkar",
  },
  twitter: {
    creator: "Om Thakkar",
    site: "@iamomthakkar",
    title: meta.title,
    description: meta.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

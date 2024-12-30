import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Om Thakkar",
  description: "Creating inclusive experiences, pixel by pixel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2Z4LM7MHW5"
        strategy="afterInteractive"
      ></script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

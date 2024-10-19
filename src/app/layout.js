import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GDSC",
  description: "Google developer student club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></Script>

        {children}
      </body>
    </html>
  );
}

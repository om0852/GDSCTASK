import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";

// Font setup
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

// Metadata
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
        {/* <Header /> */}
        {children}
        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          strategy="afterInteractive"
        />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        {/* Move scripts to the end of the body */}

      </body>
    </html>
  );
}

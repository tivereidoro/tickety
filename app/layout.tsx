import type { Metadata } from "next";
import { Geist, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// Declare fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

// Define metadata
export const metadata: Metadata = {
  title: "Tickety App",
  description: "Generate tickets for repair shop",
};

/**
 *
 * @GlobalRootLayout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

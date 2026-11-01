import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sirius — AI Teacher",
  description: "An AI teacher for Class 6-7 students in India.",
};

// Root layout: sets fonts and wraps every page with the app context provider.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

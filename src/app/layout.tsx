// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/components/ui/theme-wrapper"; // Import the client-only theme wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dibyansu | Software Developer",
  description: "Portfolio of Dibyansu, a software developer specializing in frontend and backend development.",
  keywords: "Dibyansu, Software Developer, Next.js, Frontend, Backend, Full Stack Developer",
  authors: [{ name: "Dibyansu" }],
  creator: "Dibyansu",
  openGraph: {
    title: "Dibyansu | Software Developer",
    description: "Check out my portfolio showcasing my frontend and backend projects.",
    url: "https://dibyansu.vercel.app",
    siteName: "Dibyansu Portfolio",
    images: [
      {
        url: "https://dibyansu.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dibyansu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true, // Allow indexing by search engines
    follow: true, // Allow following links
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          {children} {/* ThemeProvider will now be wrapped around the children */}
        </ThemeWrapper>
      </body>
    </html>
  );
}

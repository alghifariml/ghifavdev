import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "M. Luthfi Al Ghifari | Senior WordPress Developer & Team Lead",
  description: "Senior WordPress Developer & Team Lead with 5+ years of experience in full-stack development, specializing in custom theme/plugin development, technical SEO, and performance optimization.",
  keywords: ["WordPress Developer", "Full Stack Developer", "Laravel", "React", "TailwindCSS", "PHP", "Web Development", "Team Lead"],
  authors: [{ name: "M. Luthfi Al Ghifari" }],
  openGraph: {
    title: "M. Luthfi Al Ghifari | Senior WordPress Developer & Team Lead",
    description: "Senior WordPress Developer & Team Lead with 5+ years of experience in full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

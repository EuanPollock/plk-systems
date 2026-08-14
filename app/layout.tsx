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
  metadataBase: new URL("https://plksystems.co.uk"),

  title: "PLK Systems | Websites, Systems & Automation",

  description:
    "Modern websites, custom business systems and workflow automation built around your business.",

  openGraph: {
    title: "PLK Systems | Websites, Systems & Automation",
    description:
      "Modern websites, custom business systems and workflow automation built around your business.",
    url: "https://plksystems.co.uk",
    siteName: "PLK Systems",
    images: [
      {
        url: "/plk-logo.png",
        alt: "PLK Systems",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PLK Systems | Websites, Systems & Automation",
    description:
      "Modern websites, custom business systems and workflow automation built around your business.",
    images: ["/plk-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

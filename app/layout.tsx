import type { Metadata } from "next";
import { Josefin_Sans, Space_Grotesk, Share_Tech } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  variable: "--font-terminal",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Vertex Elite",
    template: "%s | Vertex Elite",
  },
  description:
    "Modern Marketing Agency — Architecting the elite growth engine. Precision-engineered marketing for leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${spaceGrotesk.variable} ${shareTech.variable}`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-mono/style.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-secondary bg-neutral-background text-text-secondary overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Full-page cosmic background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <StarsBackground />
          <ShootingStars />
        </div>

        {/* Your actual content */}
        {children}
      </body>
    </html>
  );
}
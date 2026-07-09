import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'ARK Assured (formerly ARK) | The Seal of Trust',
  description:
    "ARK Assured (formerly ARK) — India's trusted one stop platform for genuine, high-quality building materials and interior materials. No Middlemen, No Counterfeits. Just the REAL DEAL.",
  applicationName: 'ARK Assured (formerly ARK)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}

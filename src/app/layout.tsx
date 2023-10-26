import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adam Ridhwan',
  description: 'Portfolio site for Adam Ridhwan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-[100dvh] overflow-x-hidden`}>{children}</body>
    </html>
  );
}

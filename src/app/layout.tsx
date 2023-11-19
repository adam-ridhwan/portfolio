import './globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { inter } from '@/assets/fonts';
import { Analytics } from '@vercel/analytics/react';

import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Adam Ridhwan',
  description: 'Portfolio site for Adam Ridhwan',
  keywords: ['Portfolio', 'Website', 'Personal Website'],
  authors: [{ name: 'Adam Ridhwan', url: 'https://www.linkedin.com/in/adam-ridhwan/' }],
  creator: 'Adam Ridhwan',
  publisher: 'Adam Ridhwan',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark min-h-[100dvh] overflow-x-hidden`}>
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import './globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { inter } from '@/assets/fonts';

export const metadata: Metadata = {
  title: 'Adam Ridhwan',
  description: 'Portfolio site for Adam Ridhwan',
  keywords: ['Portfolio', 'Website', 'Personal Website'],
  authors: [{ name: 'Adam Ridhwan', url: 'https://www.linkedin.com/in/adam-ridhwan/' }],
  creator: 'Adam Ridhwan',
  publisher: 'Adam Ridhwan',
  themeColor: 'dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark min-h-[100dvh] overflow-x-hidden`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'viewto.me API Docs',
  description: 'API Documentation for viewto.me',
  icons: {
    icon: 'https://storage.googleapis.com/publics-svg/favicon32px.svg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

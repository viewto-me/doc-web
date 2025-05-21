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
  title: 'viewto.me',
  description: 'Análise e extração de dados de textos desestruturados com IA. Insights Além do Óbvio para empresas customer-centric.',
  icons: {
    icon: [
      { url: 'https://storage.googleapis.com/publics-svg/favicon32px.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    shortcut: { url: 'https://storage.googleapis.com/publics-svg/favicon32px.svg', type: 'image/svg+xml' },
    apple: [
      { url: 'https://storage.googleapis.com/publics-svg/favicon32px.svg', type: 'image/svg+xml', sizes: 'any' }
    ]
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
        <head>
          <link rel="icon" href="https://storage.googleapis.com/publics-svg/favicon32px.svg" sizes="any" />
        </head>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

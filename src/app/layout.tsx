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

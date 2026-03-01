import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'vinext — The Next.js API, reimplemented on Vite',
  description:
    'Build faster. Ship smaller. Deploy anywhere. vinext is a drop-in replacement for Next.js built on Vite, deployable to Cloudflare Workers with a single command.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'vinext — The Next.js API, reimplemented on Vite',
    description:
      'Build faster. Ship smaller. Deploy anywhere. vinext by Cloudflare.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

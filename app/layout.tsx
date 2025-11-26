import type { Metadata } from 'next';
import '../src/index.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ImagePreloader from '../src/components/ImagePreloader';

export const metadata: Metadata = {
  title: 'Tuitor - Expert Online Tutoring',
  description: 'Expert online tutoring for students worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800 relative">
        <ImagePreloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


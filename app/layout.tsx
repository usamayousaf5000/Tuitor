import type { Metadata } from 'next';
import '../src/index.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ImagePreloader from '../src/components/ImagePreloader';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thinkhubtutors.com'),
  title: {
    default: 'Think Hub Tutors',
    template: '%s | Tutor',
  },
  description: 'Expert online tutoring for students worldwide',
  verification: {
    google: '7Wb_AK4BLMqHDdLH5MfVxY11fbsW6wzXAQOuX0b6h64',
  },
  icons: {
    icon: '/images/LOGO.PNG',
    apple: '/images/LOGO.PNG',
  },
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


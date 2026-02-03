import type { Metadata } from 'next';
import About from '../../src/pages/About';

export const metadata: Metadata = {
  title: 'About Us | Think Hub Tutors',
  description: 'Learn about our passion for education and our mission to provide personalized tutoring for students worldwide.',
};

export default function AboutPage() {
  return <About />;
}


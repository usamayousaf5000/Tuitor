import type { Metadata } from 'next';
import Contact from '../../src/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Think Hub Tutors',
  description: 'Get in touch with us for any inquiries about our tutoring services or to book your free trial lesson.',
};

export default function ContactPage() {
  return <Contact />;
}


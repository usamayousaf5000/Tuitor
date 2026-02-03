import type { Metadata } from 'next';
import Tutoring from '../../src/pages/Tutoring';

export const metadata: Metadata = {
  title: 'Personalized Tutoring | Think Hub Tutors',
  description: 'Expert online tutoring sessions tailored to your unique learning style and academic goals.',
};

export default function TutoringPage() {
  return <Tutoring />;
}


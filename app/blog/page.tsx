import type { Metadata } from 'next';
import Blog from '../../src/pages/Blog';

export const metadata: Metadata = {
  title: 'Education Blog | Think Hub Tutors',
  description: 'Valuable insights, study tips, and educational news for students and parents.',
};

export default function BlogPage() {
  return <Blog />;
}


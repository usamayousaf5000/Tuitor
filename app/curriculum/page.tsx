import type { Metadata } from 'next';
import Curriculum from '../../src/pages/Curriculum';

export const metadata: Metadata = {
  title: 'Global Curricula | Think Hub Tutors',
  description: 'Expert tutoring for UK, Canadian, Australian, and international educational standards.',
};

export default function CurriculumPage() {
  return <Curriculum />;
}


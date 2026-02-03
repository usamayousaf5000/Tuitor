import type { Metadata } from 'next';
import TestElevenPlus from '../../../src/pages/TestElevenPlus';

export const metadata: Metadata = {
  title: '11+ Exam Preparation | Think Hub Tutors',
  description: 'Specialized tutoring for the 11+ Common Entrance Exam in the UK.',
};

export default function TestElevenPlusPage() {
  return <TestElevenPlus />;
}


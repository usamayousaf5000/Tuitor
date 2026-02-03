import type { Metadata } from 'next';
import TestNaplan from '../../../src/pages/TestNaplan';

export const metadata: Metadata = {
  title: 'NAPLAN Preparation | Think Hub Tutors',
  description: 'Targeted support for Australian students preparing for the NAPLAN numeracy and literacy assessments.',
};

export default function TestNaplanPage() {
  return <TestNaplan />;
}


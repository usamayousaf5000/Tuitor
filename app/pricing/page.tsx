import type { Metadata } from 'next';
import Pricing from '../../src/pages/Pricing';

export const metadata: Metadata = {
  title: 'Pricing Plans | Think Hub Tutors',
  description: 'Transparent hourly pricing for expert tutoring across various regions including UK, Canada, and Australia.',
};

export default function PricingPage() {
  return <Pricing />;
}


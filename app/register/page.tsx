'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();

  // Redirect to contact page for registration
  useEffect(() => {
    router.push('/contact');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <p className="text-gray-600">Redirecting to contact page...</p>
      </motion.div>
    </main>
  );
}


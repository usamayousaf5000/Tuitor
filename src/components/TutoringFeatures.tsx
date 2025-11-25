'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CalendarX, UserCheck, ClipboardCheck, CreditCard, Shield } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const tutoringFeatures = [
  {
    title: 'Booking a lesson',
    description: 'Easily book a tutoring session at a time that works best for you and your child. Enjoy flexible scheduling with expert tutors for a seamless e-learning experience.',
    icon: Calendar,
    color: 'bg-yellow-500',
  },
  {
    title: 'Rescheduling',
    description: 'Easily reschedule your lessons with just a few clicks. Enjoy hassle-free flexibility to adjust sessions to fit your schedule whenever needed.',
    icon: CalendarX,
    color: 'bg-red-500',
  },
  {
    title: 'Tutor replacement',
    description: 'Need a tutor replacement? We quickly find the best match to ensure uninterrupted learning, providing a seamless transition with minimal disruption.',
    icon: UserCheck,
    color: 'bg-green-500',
  },
  {
    title: 'Quality control',
    description: 'Our tutors undergo rigorous training and strict quality checks to ensure top-tier education. We maintain high teaching standards for the best learning experience.',
    icon: ClipboardCheck,
    color: 'bg-amber-700',
  },
  {
    title: 'Payment',
    description: 'We accept all major international and secure payment methods, ensuring a smooth and hassle-free transaction process for our students worldwide.',
    icon: CreditCard,
    color: 'bg-slate-900',
  },
  {
    title: 'Security',
    description: 'Your personal information and data are 100% secure with advanced SSL encryption, ensuring privacy and protection for all transactions and communications.',
    icon: Shield,
    color: 'bg-blue-500',
  },
];

const TutoringFeatures: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const cardAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  const hoverAnimation = prefersReducedMotion 
    ? {} 
    : { y: -8, scale: 1.02, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Decorations */}
      {!prefersReducedMotion && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.15, 1, 1.15],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
      )}

      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              Tutoring without the hassle
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              From scheduling lessons to organizing payments - everything's in one place.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutoringFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...cardAnimation}
              initial={{ ...cardAnimation.initial, y: prefersReducedMotion ? 0 : 40 }}
              transition={{
                duration: cardAnimation.transition.duration,
                ease: cardAnimation.transition.ease,
                delay: prefersReducedMotion ? 0 : index * 0.1
              }}
              whileHover={hoverAnimation}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary-200"
              style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
            >
              {/* Animated Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 relative overflow-hidden`}
                whileHover={prefersReducedMotion ? {} : { rotate: 360, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }}
                style={{ willChange: 'transform' }}
              >
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
                    style={{ willChange: 'transform' }}
                  />
                )}
                {!prefersReducedMotion && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
                    style={{ willChange: 'transform' }}
                  >
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                )}
                {prefersReducedMotion && (
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                )}
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors"
                whileHover={prefersReducedMotion ? {} : { x: 4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }}
              >
                {feature.title}
              </motion.h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Bottom Border */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 + 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                style={{ transformOrigin: 'left', willChange: 'transform' }}
              />

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutoringFeatures;


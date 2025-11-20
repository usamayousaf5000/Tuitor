'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Props { onContact: () => void }

const FinalCTA: React.FC<Props> = ({ onContact }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-slate-900 to-secondary-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {!prefersReducedMotion && (
            <>
              <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
                style={{ willChange: 'transform' }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 2
                }}
                style={{ willChange: 'transform' }}
              />
            </>
          )}
        </div>
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...containerAnimation}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
              <span className="text-sm font-medium">Start your journey today</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Ready to Transform Your <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
                animate={prefersReducedMotion ? {} : {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear" as const
                }}
                style={{
                  backgroundSize: '200% 200%',
                  willChange: 'background-position'
                }}
              >
                Academic Journey?
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Join thousands of students who have achieved academic excellence with our personalized tutoring services.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.button
                onClick={onContact}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  animate={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Calendar className="w-5 h-5 text-primary-600" />
                </motion.div>
                Schedule Free Consultation
              </motion.button>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
              >
                <Link
                  href="/subjects"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <motion.div
                    animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Footer Text */}
            <motion.p 
              className="mt-8 text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              No commitment required. 100% satisfaction guaranteed.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const MissionVision: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const cardAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  const hoverAnimation = prefersReducedMotion 
    ? {} 
    : { y: -8, scale: 1.02, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } };

  const paragraphAnimation = {
    initial: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Decorations */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
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
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            {...cardAnimation}
            transition={{ ...cardAnimation.transition, delay: prefersReducedMotion ? 0 : 0.1 }}
            whileHover={hoverAnimation}
            className="group relative bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              whileHover={prefersReducedMotion ? {} : { x: 4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }}
            >
              Our Mission
            </motion.h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {[
                "We are committed to helping all students maximize their e-learning potential and achieve the best results according to their curriculum & boards requirements.",
                "Through personalized tutoring, innovative teaching methods, and comprehensive support, we empower students to excel academically while building confidence and critical thinking skills that extend beyond the classroom.",
                "Our mission is to bridge the gap between students' current abilities and their academic goals, ensuring every learner receives the attention, resources, and guidance needed to succeed in their educational journey."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base"
                  {...paragraphAnimation}
                  transition={{
                    ...paragraphAnimation.transition,
                    delay: prefersReducedMotion ? 0 : 0.3 + index * 0.1
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-slate-700 rounded-b-2xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              style={{ transformOrigin: 'left', willChange: 'transform' }}
            />

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-900/0 to-slate-700/0 group-hover:from-slate-900/5 group-hover:to-slate-700/5 transition-all duration-300 pointer-events-none"></div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            {...cardAnimation}
            transition={{ ...cardAnimation.transition, delay: prefersReducedMotion ? 0 : 0.2 }}
            whileHover={hoverAnimation}
            className="group relative bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              whileHover={prefersReducedMotion ? {} : { x: 4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }}
            >
              Our Vision
            </motion.h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {[
                "To identify each student's learning ability and provide appropriate and effective teaching to bring out their maximum potential.",
                "We envision a future where every student, regardless of their background or learning style, has access to world-class education that adapts to their unique needs. Our vision extends to creating a global learning community where students are inspired to become lifelong learners.",
                "By leveraging cutting-edge technology and proven pedagogical approaches, we aim to transform the tutoring experience, making quality education accessible, engaging, and effective for students across the United Kingdom, Canada, and Australia."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base"
                  {...paragraphAnimation}
                  transition={{
                    ...paragraphAnimation.transition,
                    delay: prefersReducedMotion ? 0 : 0.4 + index * 0.1
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-b-2xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              style={{ transformOrigin: 'left', willChange: 'transform' }}
            />

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/5 group-hover:to-primary-400/5 transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


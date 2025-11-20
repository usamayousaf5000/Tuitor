'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Williams',
    role: 'Grade 10 Student',
    quote: 'My math grades jumped from C to A-. The tutors were patient and explained concepts in ways that made sense to me. The sessions were tailored perfectly to my learning style.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    subject: 'Mathematics'
  },
  {
    name: 'Noah Chen',
    role: 'SAT Prep Student',
    quote: 'Scored 150+ points higher on my SAT after following the focused prep plan. My tutor knew exactly what areas I needed to work on and provided excellent strategies.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    subject: 'Test Prep'
  },
  {
    name: 'Sarah Johnson',
    role: 'Parent of Grade 8 Student',
    quote: 'The flexibility of online tutoring has been a lifesaver for our busy family. My son actually looks forward to his science sessions now!',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    subject: 'Science'
  },
];

const Testimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/ST.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-slate-50/95 backdrop-blur-sm"></div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-primary-200 to-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Student Success Stories</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600">Students Say</span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hear from students and parents who have experienced the difference our tutoring makes.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary-200 flex flex-col relative overflow-hidden group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-purple-50/0 group-hover:from-primary-50/50 group-hover:to-purple-50/50 transition-all duration-500 rounded-3xl"></div>

              {/* Floating Quote Icon */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Quote className="w-12 h-12 text-primary-600" />
              </motion.div>

              <div className="mb-6 relative z-10">
                {/* Animated Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + i * 0.1,
                        type: "spring",
                        bounce: 0.6
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Subject Badge */}
                <motion.div
                  className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {t.subject}
                </motion.div>

                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                <motion.p
                  className="text-slate-600 italic leading-relaxed flex-grow relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  "{t.quote}"
                </motion.p>
              </div>

              {/* Animated Divider */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              />

              <motion.div
                className="flex items-center gap-4 mt-auto relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                <motion.img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </motion.div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                style={{ transform: 'skewX(-20deg)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


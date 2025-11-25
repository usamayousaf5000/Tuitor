'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const name = 'Think Hub Tutors';
  const email = 'thinkhubtutors@gmail.com';
  const ukPhone = '+44 7367067438';
  const caPhone = '+1 (587) 870-0861';

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.();
    }
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-slate-400 mt-2">
                Get in touch with us directly. We're here to help!
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <User className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-medium mb-1">Name</div>
                  <div className="text-white text-lg font-semibold">{name}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-secondary-500/10 flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-medium mb-1">Email</div>
                  <a href={`mailto:${email}`} className="text-white text-lg font-semibold hover:text-primary-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              {ukPhone && (
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm font-medium mb-1">United Kingdom</div>
                    <a href={`tel:${ukPhone}`} className="text-white text-lg font-semibold hover:text-primary-400 transition-colors">
                      {ukPhone}
                    </a>
                  </div>
                </div>
              )}

              {caPhone && (
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm font-medium mb-1">Canada</div>
                    <a href={`tel:${caPhone}`} className="text-white text-lg font-semibold hover:text-primary-400 transition-colors">
                      {caPhone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
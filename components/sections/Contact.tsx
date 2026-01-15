'use client';

import React, { useRef, useState, useActionState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Loader2 } from 'lucide-react';
import { EASE_LUXURY } from '@/lib/animations';
import { sendEmailAction } from '@/app/actions';

const initialState = {
  success: false,
  message: '',
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(sendEmailAction, initialState);

  // Close form on success after a delay
  React.useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        setIsFormOpen(false);
        // Reset state logic would be needed here if we re-open, 
        // but for now simple close is fine.
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <footer className="bg-[#ffffff] pt-16 md:pt-32 px-6 md:px-12 lg:px-24 border-t border-[#111111]/10 relative">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 md:gap-y-16 lg:gap-x-12 mb-12 md:mb-24">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.5, ease: EASE_LUXURY }}
          >
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-8">The Next Step</p>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] -ml-1 text-[#111111]">
              Ready to <br />
              <span className="text-[#111111]/20">Engineer it?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="group inline-flex items-center gap-4 md:gap-6 text-xl md:text-3xl font-light border-b border-[#111111]/20 pb-2 hover:border-[#111111] transition-all cursor-pointer bg-transparent"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 1, ease: EASE_LUXURY }}
            className="space-y-12 lg:pl-12 lg:border-l border-[#111111]/10"
          >
            <div className="group cursor-pointer">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2 group-hover:opacity-100 transition-opacity">
                Email
              </p>
              <a
                href="mailto:support@strucureo.com"
                className="text-xl md:text-2xl font-medium block hover:opacity-50 transition-opacity"
              >
                support@strucureo.com
              </a>
            </div>

            <div className="group cursor-pointer">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2 group-hover:opacity-100 transition-opacity">
                Phone
              </p>
              <p className="text-xl md:text-2xl font-medium">+91 78259 68061</p>
            </div>

            <div className="group">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Studio</p>
              <p className="text-lg text-[#6E6E6E] leading-relaxed">
                Elite Engineering Studio. <br />
                Built for Scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="border-t border-[#111111]/10 py-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4"
      >
        <div className="flex flex-col">
          <span className="text-[14vw] lg:text-[12vw] leading-[0.8] font-bold tracking-tighter text-[#111111]/5 select-none">
            STRUCUREO
          </span>
        </div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest pb-2 md:pb-0 text-[#111111]">
          <span className="opacity-40">© {new Date().getFullYear()}</span>
          <a href="#" className="font-bold border-b border-[#111111] pb-0.5 hover:opacity-50 transition-opacity">
            Privacy
          </a>
          <a href="#" className="font-bold border-b border-[#111111] pb-0.5 hover:opacity-50 transition-opacity">
            Legal
          </a>
        </div>
      </motion.div>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, x: '-50%' }}
              animate={{ opacity: 1, y: '-50%', scale: 1, x: '-50%' }}
              exit={{ opacity: 0, y: 50, scale: 0.95, x: '-50%' }}
              className="fixed left-1/2 top-1/2 w-[90vw] md:w-full max-w-lg bg-white p-6 md:p-12 shadow-2xl z-[9999] border border-black/5 rounded-2xl max-h-[85vh] overflow-y-auto scrollbar-hide origin-center"
            >
              <div className="flex justify-between items-center mb-6 md:mb-8 sticky top-0 bg-white z-10 pb-2">
                <h3 className="text-xl md:text-2xl font-bold">Start a Conversation</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors -mr-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {state.success ? (
                <div className="bg-green-50 text-green-900 p-4 rounded-lg flex items-center justify-center min-h-[200px]">
                  <p className="text-lg font-medium">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium opacity-60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/5 border-0 rounded-none p-4 focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium opacity-60 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-black/5 border-0 rounded-none p-4 focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium opacity-60 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-black/5 border-0 rounded-none p-4 focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                      placeholder="Tell us about your engineering needs..."
                    />
                  </div>

                  {state.message && !state.success && (
                    <p className="text-red-500 text-sm">{state.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#111111] text-white py-4 font-bold tracking-widest text-sm hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
};


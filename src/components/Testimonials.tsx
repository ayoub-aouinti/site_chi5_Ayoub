import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);

  const testimonials = t('testimonials.quotes', { returnObjects: true }) as Array<{
    text: string;
    author: string;
    image?: string;
  }>;

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const isRTL = i18n.language === 'ar';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-amiri font-bold text-center mb-16">
          -- {t('testimonials.title')} --
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-12 text-center relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent p-3 rounded-full text-foreground dark:text-black">
                <Quote size={24} />
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/80 italic mb-8 font-cairo leading-relaxed">
                "{testimonials[index]?.text}"
              </p>
              
              <div className="flex flex-col items-center">
                {testimonials[index]?.image && (
                  <img
                    src={testimonials[index]?.image}
                    alt={testimonials[index]?.author}
                    className="w-20 h-20 rounded-full object-cover mb-4 border border-foreground/10"
                    loading="lazy"
                  />
                )}
                <h4 className="text-xl font-bold font-amiri text-accent">{testimonials[index]?.author}</h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button 
              onClick={isRTL ? next : prev}
              className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground hover:text-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isRTL ? "Next testimonial" : "Previous testimonial"}
            >
              <ChevronRight size={24} />
            </motion.button>
            <motion.button 
              onClick={isRTL ? prev : next}
              className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground hover:text-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isRTL ? "Previous testimonial" : "Next testimonial"}
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

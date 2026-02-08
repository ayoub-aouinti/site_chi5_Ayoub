import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "سيّدي أيّوب بن رفيق عوينتي التّونسي .. كم يعجبني نشاط هذا الشّابّ .. لقد أبدع قديما في بحوث تتعلّق بالقرآن الكريم كانت ولاتزال غاية في الإبداع .. هاهو اليوم يطلّ علينا بكتابه الجديد .. إتحاف القارئ النّحرير بإفراد قراءة ابن كثير ..",
    author: "أ.د/ كمال قدّة الجزائري",
    image: "/img/test/1.jpg"
  },
  {
    text: "فقد يسّر لي أن أطّلع على هذا التّأليف الموفّق للشّيخ الأستاذ ابننا البارّ أيّوب بن رفيق عوينتي زاده الله علما وأدبا وتوفيقا. وميّز هذا الكتاب بالمحافظة على مدرستنا التّونسيّة المتّصلة السّند برسول هذه الأمّة..",
    author: "الشيخ المقرئ/ محمد مشفر",
    image: "/img/test/2.jpg"
  },
  {
    text: "فقد عرفت الأخ الفاضل الشّيخ أيّوب بن رفيق عوينتي منذ أن أجزته في رواية قالون عن نافع.. وهو من الشّباب المتحمّسين لخدمة الكتاب العزيز، رغم أنّ اختصاصه الرّسميّ -الدّراسات الهندسيّة- مغاير لاختصاص علوم القرآن الكريم..",
    author: "أ.د/ فتحي بن الشريف العبيدي",
    image: "/img/test/3.jpg"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-amiri font-bold text-center mb-16">-- قالوا عن الشيخ --</h2>
        
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
                "{testimonials[index].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].author}
                  className="w-20 h-20 rounded-full border-2 border-accent mb-4 object-cover"
                />
                <h4 className="text-xl font-bold font-amiri text-accent">{testimonials[index].author}</h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

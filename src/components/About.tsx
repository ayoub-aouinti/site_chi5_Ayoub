import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl -z-10" />
            <img 
              src="/img/Nouveau dossier/me.jpg" 
              alt="Mokri Ayoub Aouinti" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-foreground/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-amiri font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-1 bg-accent rounded-full" />
              عن المقرئ
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-cairo">
              <p>
                من مواليد 1990م، بنابل - الجمهورية التونسية. تخرج مهندساً، ويعمل حالياً بمكتب دراسات. 
              </p>
              <p>
                أتم حفظ القرآن الكريم في سن السادسة عشر برواية قالون عن نافع المدني من طريق أبي نشيط، وذلك بكتاب جامع الأنصار على يد الشيخ المؤدب محمد بن رمضان بمسقط رأسه بمدينة دار شعبان الفهري.
              </p>
              <p>
                تتلمذ في التجويد والقراءات على جلة من شيوخ البلاد التونسية، وكانت له مشاركات في مسابقات قرآنية وطنية ودولية (مصر، المغرب، والكويت)، بالإضافة إلى مساهماته التأليفية العلمية في مجال التجويد والقراءات.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <span className="block text-3xl font-bold text-accent mb-2">10</span>
                <span className="text-sm text-foreground/50">القراءات العشر</span>
              </div>
              <div className="glass-card p-6 text-center">
                <span className="block text-3xl font-bold text-accent mb-2">+6</span>
                <span className="text-sm text-foreground/50">مؤلفات علمية</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

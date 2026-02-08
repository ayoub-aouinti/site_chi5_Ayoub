import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:order-2"
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
            className="md:order-1"
          >
            <h2 className="text-4xl font-amiri font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-1 bg-accent rounded-full" />
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-cairo">
              <p>
                {t('about.bio1')}
              </p>
              <p>
                {t('about.bio2')}
              </p>
              <p>
                {t('about.bio3')}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <span className="block text-3xl font-bold text-accent mb-2">10</span>
                <span className="text-sm text-foreground/50">{t('about.recitations10')}</span>
              </div>
              <div className="glass-card p-6 text-center">
                <span className="block text-3xl font-bold text-accent mb-2">+6</span>
                <span className="text-sm text-foreground/50">{t('about.scientific6')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

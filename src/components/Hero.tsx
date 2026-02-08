import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('hero.badge')}
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-amiri font-bold mb-8 leading-tight text-foreground">
            {t('hero.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/60 font-cairo max-w-2xl mx-auto mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#recitations"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.btnRecitations')}
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3 rounded-full border border-foreground/20 text-foreground font-bold hover:bg-foreground/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.btnAbout')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;

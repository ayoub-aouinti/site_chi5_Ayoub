import { motion } from 'framer-motion';
import { Mail, Send, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-amiri font-bold mb-8 text-foreground">{t('contact.title')}</h2>
            <p className="text-foreground/60 font-cairo text-lg mb-10 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="flex gap-4 mb-12">
              {[
                { icon: <Facebook />, href: "https://www.facebook.com/ayoub.aouinti.90" },
                { icon: <Twitter />, href: "https://twitter.com/U9TR5elQZKVEHan" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/aouinti-ayoub-093703169/" },
                { icon: <Youtube />, href: "https://www.youtube.com/channel/UCKXkGOd1b1DxLvC49qPCQmg" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-accent hover:bg-accent hover:text-white dark:hover:text-black transition-all"
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-foreground/40">{t('contact.email')}</span>
                <span className="text-lg font-medium">{t('contact.emailPlaceholder')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form action="https://formspree.io/f/xvoyrdjw" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/50">{t('contact.formName')}</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                  placeholder={t('contact.formNamePlaceholder')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/50">{t('contact.formEmail')}</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                  placeholder={t('contact.formEmailPlaceholder')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/50">{t('contact.formMessage')}</label>
                <textarea 
                  rows={4}
                  name="message"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none text-foreground"
                  placeholder={t('contact.formMessagePlaceholder')}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>{t('contact.formSubmit')}</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Publications = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<null | (typeof works)[number]>(null);

  const works = [
    {
      title: 'سلوة المحزون',
      file: '/PDF/01-salwa.pdf',
      image: '/img/projects/1.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/5437'
    },
    {
      title: 'إتحاف القارئ النحرير',
      file: '/PDF/05-ithaf.pdf',
      image: '/img/projects/5.jpg'
    },
    {
      title: 'تقييد المصدرة',
      file: '/PDF/03-Takiid.pdf',
      image: '/img/projects/3.jpg'
    },
    {
      title: 'متن الجزرية',
      file: '/PDF/04-jazaria.pdf',
      image: '/img/projects/4.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/4327'
    },
    {
      title: 'خلاصة التّحريرات في مخارج الحروف والصّفات',
      file: '/PDF/02-koulasa.pdf',
      image: '/img/projects/2.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/6729'
    },
    {
      title: 'خواطر ومقالات',
      file: '/PDF/06-kawater.pdf',
      image: '/img/projects/6.jpg'
    },
    {
      title: 'التّأصيل لفنّ التّرتيل',
      file: '/PDF/07-taasil.pdf',
      image: '/img/projects/7.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/6726'
    },
    {
      title: 'إرشاد الحيران في خلاف قالون لعثمان',
      file: '/PDF/08-irchad.pdf',
      image: '/img/projects/8.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/5486'
    },
    {
      title: 'منظومة الدّراية في ما ليس برأس آية',
      file: '/PDF/09-diraya.pdf',
      image: '/img/projects/9.jpg'
    },
        {
      title: 'ورقات حول جمع القرآن ورسمه',
      file: '/PDF/10-warakat.pdf',
      image: '/img/projects/10.jpg',
      lien: 'https://www.dar-ilm.com/shop/show/6730'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-amiri font-bold text-center mb-4">{t('scientificWorks.title')}</h2>
      <p className="text-foreground/50 text-center mb-12 font-cairo">{t('scientificWorks.subtitle')}</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <button
              type="button"
              className="block w-full text-left"
              onClick={() => setActive(work)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-foreground/10 aspect-[3/4]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-amiri text-center text-foreground group-hover:text-accent transition-colors">
                {work.title}
              </h3>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl bg-[var(--background)] rounded-3xl border border-foreground/10 overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10">
                <h3 className="text-xl font-bold font-amiri">{active.title}</h3>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="p-2 rounded-full hover:bg-foreground/5"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full bg-black/5 max-h-[70vh] overflow-hidden">
                <iframe
                  className="w-full h-[70vh]"
                  src={`${active.file}#toolbar=1&navpanes=0&scrollbar=1`}
                  title={active.title}
                />
              </div>
              <div className="px-6 py-5 flex flex-wrap gap-3">
                <a
                  href={active.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Download size={18} />
                  تحميل الملف
                </a>
                {active.lien && (
                  <a
                    href={active.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    احجز نسختك
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Publications;

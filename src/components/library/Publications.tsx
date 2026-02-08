import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Publications = () => {
  const { t } = useTranslation();

  const works = [
    {
      title: 'سلوة المحزون',
      file: '/PDF/سلوة المحزون نسخة نهائيّة دار نشر.pdf',
      image: '/img/projects/1.jpg'
    },
    {
      title: 'إتحاف القارئ النحرير',
      file: '/PDF/إتحاف القارئ النّحرير النهائي.pdf',
      image: '/img/projects/5.jpg'
    },
    {
      title: 'تقييد المصدرة',
      file: '/PDF/تَقْيِيدُ الْمَصْدَرَهْ بعد تعديل الأنماط (Enregistré automatiquement).pdf',
      image: '/img/projects/3.jpg'
    },
    {
      title: 'متن الجزرية',
      file: '/PDF/متن الجزرية نهائي.pdf',
      image: '/img/projects/4.jpg'
    },
    {
      title: 'خلاصة التحريرات',
      file: '/PDF/خلاصة التّحريرات في مخارج الحروف والصّفات-نسخة جاهزة للطّبع.pdf',
      image: '/img/projects/2.jpg'
    },
    {
      title: 'خواطر ومقالات',
      file: '/PDF/خواطر ومقالات في علوم القرآن والقراءات (2).pdf',
      image: '/img/projects/6.jpg'
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
            <a href={work.file} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative overflow-hidden rounded-2xl border border-foreground/10 aspect-[3/4]">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-3 text-accent bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <Download size={18} />
                    <span className="font-bold">{t('scientificWorks.download')}</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold font-amiri text-center text-foreground group-hover:text-accent transition-colors">
                {work.title}
              </h3>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Publications;

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Recitations = () => {
  const { t } = useTranslation();

  const recitations = [
    {
      id: 'ypUPuM07bbw',
      title: t('recitations.surahAlFatiha'),
      desc: t('recitations.waraqalun')
    },
    {
      id: 'UIoWHShVOgk',
      title: t('recitations.selected'),
      desc: t('recitations.khalfhamza')
    },
    {
      id: 'Zg4A7kc1UWk',
      title: t('recitations.surahAlFajr'),
      desc: t('recitations.bySheikhAyoub')
    }
  ];

  return (
    <section id="recitations" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-amiri font-bold text-center mb-16">-- {t('recitations.title')} --</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {recitations.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-amiri mb-2 text-foreground group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-foreground/50 font-cairo">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recitations;

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Videos = () => {
  const { t } = useTranslation();

  const playlistId = 'PL-lp-Ykl84Jwgccg8fMJjGJORqc6P_MAx';

  // Sample videos from the playlist (you can fetch this dynamically)
  const videos = [
    { id: 'ZjkUl8fOsKk', title: 'Video 1' },
    { id: 'video2', title: 'Video 2' },
    { id: 'video3', title: 'Video 3' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-amiri font-bold mb-8 text-center">{t('library.videos.subtitle')}</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main video player */}
        <div className="glass-card overflow-hidden">
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/ZjkUl8fOsKk`}
              title="Playlist Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Playlist */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">{t('library.videos.playlist')}</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {videos.map((video, i) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}&list=${playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="block p-4 glass-card hover:bg-accent/10 transition-colors text-foreground/80 hover:text-foreground"
              >
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold text-lg">{i + 1}</span>
                  <span className="font-cairo">{video.title}</span>
                </div>
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block mt-6 px-6 py-3 bg-accent text-white rounded-full font-bold text-center hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            {t('library.videos.viewPlaylist')}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Videos;

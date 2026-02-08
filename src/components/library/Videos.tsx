import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import videoList from '../../data/videoList.json';

const Videos = () => {
  const { t } = useTranslation();

  const playlistId = 'PL-lp-Ykl84Jwgccg8fMJjGJORqc6P_MAx';

  const videos = (videoList as Array<{ id: string; title: string; duration: string }>) || [];
  const [current, setCurrent] = useState<{ id: string; title: string; duration: string } | null>(videos[0] || null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-amiri font-bold mb-8 text-center">{t('library.videos.subtitle')}</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main video player */}
        {current ? (
          <iframe
            className="w-full rounded-3xl border border-foreground/10 overflow-hidden"
            style={{ aspectRatio: '16 / 9' }}
            src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1`}
            title={current.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full aspect-[16/9] rounded-3xl border border-foreground/10 flex items-center justify-center text-foreground/60">
            No video
          </div>
        )}

        {/* Playlist */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">{t('library.videos.playlist')}</h3>
          <div className="max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-foreground/10">
            {videos.map((video, i) => (
              <motion.button
                key={video.id}
                type="button"
                onClick={() => {
                  setCurrent(video);
                }}
                whileHover={{ x: 5 }}
                className={`w-full text-left p-4 rounded-xl transition-colors flex items-center justify-between gap-4 ${
                  current?.id === video.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'glass-card hover:bg-accent/10 text-foreground/80 hover:text-foreground'
                }`}
              >
                <span className="text-sm font-medium whitespace-nowrap">{video.duration}</span>
                <span className="font-cairo truncate flex-1">{video.title}</span>
                <span className="text-accent font-bold text-lg">{i + 1}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Videos;

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import fallbackList from '../../data/audioList.json';
import { enrichAudioListWithDurations } from '../../utils/audioUtils';

type AudioItem = {
  filename: string;
  title?: string;
  duration?: string;
  path?: string;
  surah?: number;
};

const Audios = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [list, setList] = useState<AudioItem[]>(fallbackList as AudioItem[]);
  const [current, setCurrent] = useState<AudioItem | null>((fallbackList as AudioItem[])[0] || null);

  useEffect(() => {
    // Try to fetch a manifest at /dist/mp3/manifest.json (if you generate one during build)
    fetch('/dist/mp3/manifest.json')
      .then((res) => {
        if (!res.ok) throw new Error('no manifest');
        return res.json();
      })
      .then(async (data: AudioItem[]) => {
        if (Array.isArray(data) && data.length) {
          const enriched = await enrichAudioListWithDurations(data);
          setList(enriched);
          if (!current || current.filename === (fallbackList as AudioItem[])[0]?.filename) {
            setCurrent(enriched[0]);
          }
        }
      })
      .catch(async () => {
        // fallbackList already loaded from src/data/audioList.json
        if (fallbackList && fallbackList.length) {
          const enriched = await enrichAudioListWithDurations(fallbackList as AudioItem[]);
          setList(enriched);
          if (!current || current.filename === undefined) {
            setCurrent(enriched[0]);
          }
        }
      });
  }, []);

  useEffect(() => {
    if (current && audioRef.current) {
      audioRef.current.src = current.path || `/mp3/${current.filename}`;
      setIsPlaying(false);
    }
  }, [current]);

  const playItem = (item: AudioItem) => {
    setCurrent(item);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 50);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-amiri font-bold mb-12 text-center">{t('library.audios.subtitle')}</h2>

      <div className="glass-card p-8">
        <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scrollable Audio List */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-amiri font-bold text-foreground mb-4">{t('library.audios.title')} - {list.length}</h3>
            </div>
            <div className="max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-foreground/10">
              <div className="flex flex-col gap-3">
                {list.map((item) => (
                  <motion.button
                    key={item.filename}
                    onClick={() => playItem(item)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                      current?.filename === item.filename
                        ? 'bg-accent text-white shadow-lg shadow-accent/30'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="font-amiri font-semibold">{String(item.surah).padStart(2, '0')}- سورة {item.title}</div>
                    </div>
                    <div className="flex-shrink-0 text-sm font-medium ltr:ml-2 rtl:mr-2">
                      {item.duration}
                    </div>
                    {isPlaying && current?.filename === item.filename && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="flex-shrink-0"
                      >
                        <Volume2 size={18} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Player Section */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-2xl mb-6">
              <Volume2 size={80} className="text-white opacity-50" />
            </div>

            <h3 className="text-2xl font-amiri font-bold text-center mb-2">{current ? `${String(current.surah).padStart(2, '0')}- سورة ${current.title}` : t('library.audios.title')}</h3>
            <p className="text-center text-foreground/60 font-cairo mb-4">الشيخ أيوب عوينتي</p>

            <motion.button
              onClick={togglePlayPause}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-accent text-white rounded-full shadow-lg hover:shadow-accent/40 transition-shadow"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </motion.button>

            <div className="w-full mt-6">
              <audio ref={audioRef} controls className="w-full" controlsList="nodownload">
                <source type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-foreground/5 rounded-xl">
          <p className="font-cairo text-foreground/70 leading-relaxed">
            {t('library.audios.description')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Audios;

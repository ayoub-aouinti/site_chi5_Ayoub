export type AudioItem = {
  filename: string;
  title?: string;
  duration?: string;
  path?: string;
  surah?: number;
};

export const formatDuration = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return '00:00';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export const loadAudioDuration = (path: string): Promise<string> => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.onloadedmetadata = () => {
      resolve(formatDuration(audio.duration));
    };
    audio.onerror = () => {
      resolve('00:00');
    };
    audio.src = path;
  });
};

export const enrichAudioListWithDurations = async (list: AudioItem[]): Promise<AudioItem[]> => {
  const enriched = await Promise.all(
    list.map(async (item) => {
      const path = item.path || `/mp3/${item.filename}`;
      const duration = await loadAudioDuration(path);
      return { ...item, duration };
    })
  );
  return enriched;
};

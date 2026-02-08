import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Videos from './library/Videos';
import Audios from './library/Audios';
import Publications from './library/Publications';

type LibraryTab = 'videos' | 'audios' | 'publications';

const Library = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<LibraryTab>('videos');

  const tabs = [
    { id: 'videos', label: t('library.videos') },
    { id: 'audios', label: t('library.audios') },
    { id: 'publications', label: t('library.publications') }
  ] as const;

  return (
    <section id="library" className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-amiri font-bold text-center mb-16">{t('library.title')}</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as LibraryTab)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'videos' && <Videos />}
          {activeTab === 'audios' && <Audios />}
          {activeTab === 'publications' && <Publications />}
        </div>
      </div>
    </section>
  );
};

export default Library;

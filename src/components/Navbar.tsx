import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set HTML direction based on language
    const htmlElement = document.documentElement;
    if (i18n.language === 'ar') {
      htmlElement.dir = 'rtl';
      htmlElement.lang = 'ar';
    } else {
      htmlElement.dir = 'ltr';
      htmlElement.lang = i18n.language;
    }
  }, [i18n.language]);

  const [libraryOpen, setLibraryOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: t('nav.home'), href: '#intro' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.recitations'), href: '#recitations' },
    { name: t('nav.contact'), href: '#contact' },
  ], [t]);

  const libraryLinks = useMemo(() => [
    { name: t('library.videos'), href: '/library#library-videos' },
    { name: t('library.audios'), href: '/library#library-audios' },
    { name: t('library.publications'), href: '/library#library-publications' },
  ], [t]);

  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-lg border-b border-foreground/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#intro"
          className="text-2xl font-amiri font-bold text-accent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          أيوب عوينتي
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link font-cairo text-foreground/70 hover:text-foreground">
              {link.name}
            </a>
          ))}
          
          {/* Library Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLibraryOpen(!libraryOpen)}
              className="nav-link font-cairo text-foreground/70 hover:text-foreground flex items-center gap-1"
            >
              {t('nav.library')}
              <span className={`transition-transform ${libraryOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <AnimatePresence>
              {libraryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 bg-[var(--nav-bg)] backdrop-blur-xl border border-foreground/10 rounded-lg shadow-lg overflow-hidden min-w-max rtl:right-0 ltr:left-0"
                >
                  {libraryLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setLibraryOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 border-l border-foreground/10 pl-6 ml-2 rtl:border-r rtl:border-l-0 rtl:pr-6 rtl:pl-2">
            <ThemeToggle />
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 text-foreground/70 hover:text-accent transition-colors"
              >
                <Globe size={20} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 bg-[var(--nav-bg)] backdrop-blur-xl border border-foreground/10 rounded-lg shadow-lg overflow-hidden min-w-max rtl:right-0 ltr:left-0"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-accent/20 text-accent font-medium'
                            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <Globe size={20} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 bg-[var(--nav-bg)] backdrop-blur-xl border border-foreground/10 rounded-lg shadow-lg overflow-hidden min-w-max rtl:right-0 ltr:left-0"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-accent/20 text-accent font-medium'
                          : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-foreground/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-lg font-cairo text-foreground/80 py-2 border-b border-foreground/5 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Library Dropdown */}
              <div className="border-b border-foreground/5">
                <button
                  onClick={() => setLibraryOpen(!libraryOpen)}
                  className="w-full text-lg font-cairo text-foreground/80 py-2 flex items-center justify-center gap-2"
                >
                  {t('nav.library')}
                  <span className={`transition-transform text-sm ${libraryOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {libraryOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 pt-2 bg-foreground/5"
                    >
                      {libraryLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-sm font-cairo text-foreground/70 py-1 hover:text-accent"
                          onClick={() => {
                            setIsOpen(false);
                            setLibraryOpen(false);
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Recitations from './components/Recitations';
import Library from './components/Library';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  const isLibraryPage = pathname.startsWith('/library');

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent/30">
      <Navbar />
      <main>
        {isLibraryPage ? (
          <Library />
        ) : (
          <>
            <Hero />
            <About />
            <Testimonials />
            <Recitations />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <a
        href="https://wa.me/21651790223"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/30 hover:scale-105 transition-transform"
        aria-label="WhatsApp chat"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

export default App;

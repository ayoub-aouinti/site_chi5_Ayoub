import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Recitations from './components/Recitations';
import Library from './components/Library';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;

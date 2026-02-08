import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Recitations from './components/Recitations';
import ScientificWorks from './components/ScientificWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Recitations />
        <ScientificWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

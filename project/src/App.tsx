import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;

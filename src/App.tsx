import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Missions from './components/Missions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Missions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import ScrollTop from './components/ScrollTop';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Qualification from './components/qualification';
import Services from './components/Services';
import ProjectInMind from './components/ProjectInMind';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Qualification />
        <Services />
        <ProjectInMind />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

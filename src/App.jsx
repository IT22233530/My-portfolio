import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <Aboutme />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;

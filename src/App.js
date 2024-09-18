import './style.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;

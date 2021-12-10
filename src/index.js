import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <Bio />
          <Contact />
          </main>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root'),
);

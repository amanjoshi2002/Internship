import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './components/Products';
import FullView from './components/FullView';
import ContactUs from './pages/Contact';
import AboutUs from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<FullView />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

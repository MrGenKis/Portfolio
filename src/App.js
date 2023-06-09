import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projet1 from './pages/Projet1';
import Projet2 from './pages/Projet2';
import Projet3 from './pages/Projet3';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet-1" element={<Projet1 />} />
        <Route path="/projet-2" element={<Projet2 />} />
        <Route path="/projet-3" element={<Projet3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



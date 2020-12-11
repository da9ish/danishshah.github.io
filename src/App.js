import React from 'react';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Design from './pages/Design/Design';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

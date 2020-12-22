import React from 'react';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import './App.css';
import './tailwind.css';
import Bg from './assets/images/bg.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Design from './pages/Design/Design';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <div className='w-full h-screen lg:overflow-hidden flex flex-col lg:flex-row bg-main' style={{ backgroundImage: `url(${Bg})` }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

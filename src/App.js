import React from 'react';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import './App.css';
import './tailwind.css';
import Background from './assets/images/bg.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Design from './pages/Design/Design';
import Contact from './pages/Contact/Contact';
import BlogsList from './pages/Blog/BlogsList';
// import Background from './components/Background';

function App() {
  return (
    <div className='relative w-full h-screen lg:overflow-hidden flex flex-col lg:flex-row bg-main' style={{backgroundImage: `url(${Background})`}}>
    {/* <Background /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/designs" element={<Design />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

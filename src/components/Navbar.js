import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { useLocation } from "react-router-dom";
import Twitter from "./Twitter";
import GitHub from "./GitHub";
import Dribbble from "./Dribbble";

const Navbar = () => {
  const location = useLocation()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navLinks = [
    { path: '/', name: "About Me" },
    { path: '/work', name: "Work" },
    { path: '/designs', name: "Designs" },
    { path: '/blogs', name: "Blogs" },
    { path: '/contact', name: "Contact" }
  ]

  return (
    <>
      <div className={`w-full h-16 p-4 sm:flex lg:hidden relative ${mobileNavOpen && 'bg-gray-900'}`}>
        <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <X /> : <Menu />}
        </button>
        <div className={`flex flex-col justify-around items-center absolute top-56-px left-0 w-full h-screen bg-gray-900 transition-all duration-200 z-10 ${mobileNavOpen ? 'block' : 'hidden'}`}>
          <ul className='w-full'>
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path
              return <li key={`${link.name}-${idx}`} className={`${isActive ? 'underline font-semibold' : 'text-gray-600'} p-4 text-center hover:bg-gray-800`}><a datanav="true" href={link.path}>{link.name}</a></li>
            })}
          </ul>
          <div className='flex justify-center'>
            <a datanav="true" className="link mb-4 rounded-full hover:text-github" target="_blank" rel="noopener noreferrer" href="https://github.com/da9ish">
              <GitHub />
            </a>
            <a datanav="true" className="link mb-4 rounded-full hover:text-dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/da9ish">
              <Dribbble />
            </a>
            <a datanav="true" className="link mb-4 rounded-full hover:text-twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/da9ish">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-48 lg:flex justify-center">
        <ul className="p-0 list-none my-16">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path
            return <li className={isActive ? "leading-6 my-16 rounded-full underline font-semibold" : "leading-6 my-16 rounded-full text-gray-600 hover:text-gray-50 transition-all"} key={`${link.name}-${idx}`}><a datanav="true" href={link.path}>{link.name}</a></li>
          })}
          <li>
            <a datanav="true" className="link mb-4 hover:text-github" target="_blank" rel="noopener noreferrer" href="https://github.com/da9ish">
              <GitHub />
            </a>
          </li>
          <li>
            <a datanav="true" className="link mb-4 hover:text-dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/da9ish">
              <Dribbble />
            </a>
          </li>
          <li>
            <a datanav="true" className="link mb-4 hover:text-twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/da9ish">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
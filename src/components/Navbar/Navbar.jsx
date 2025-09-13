import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logocga.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="container"
      style={{ backgroundColor: sticky ? '#212EA0': 'transparent' }}
    >
      <img src={logo} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><a href='../components/Contact/Contact.jsx' className='btn'>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import './header.scss';
import { logo, logoWhite, close, menu, menuWhite } from '../../assets/images/png';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-hf">
        <div className="header-div">
          <div className="header-div-logo">
            <Link to={"/"}>
              <img src={isScrolled ? logo : logoWhite} alt="logo" />
            </Link>
          </div>
          <div className="header-div-ancer">
            <NavLink activeclassname='active' to={"/"}>Home</NavLink>
            <NavLink activeclassname='active' to={"/about"}>About Us</NavLink>
            <NavLink activeclassname='active' to={"/tours"}>Tours</NavLink>
            <NavLink activeclassname='active' to={"/contactus"}>Contact Us</NavLink>
          </div>
          <div className="header-div-menu">
            <img onClick={toggleSidebar} src={isScrolled ? menu : menuWhite} alt="menu" />
          </div>
        </div>
      </div>
      <div className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-div-logo">
          <Link to={"/"} onClick={toggleSidebar}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar-div-ancer">
          <img className='sidebar-close' onClick={toggleSidebar} src={close} alt="close" />
          <NavLink activeclassname='active' to={"/"} onClick={toggleSidebar}>Home</NavLink>
          <NavLink activeclassname='active' to={"/about"} onClick={toggleSidebar}>About Us</NavLink>
          <NavLink activeclassname='active' to={"/tours"} onClick={toggleSidebar}>Tours</NavLink>
          <NavLink activeclassname='active' to={"/contactus"} onClick={toggleSidebar}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}

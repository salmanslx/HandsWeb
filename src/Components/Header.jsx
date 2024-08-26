import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Logo from '../Assets/logo (1).png';

function Header() {
  const location = useLocation();

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg rounded-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={Logo} alt="Logo" className="logo-img me-2" />
          <span className="hands-app text-white rounded-3 p-2">HANDS</span>
        </a>

        {location.pathname === '/' && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/" onClick={handleNavLinkClick}>
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#about" onClick={handleNavLinkClick}>
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#features" onClick={handleNavLinkClick}>
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#team" onClick={handleNavLinkClick}>
                    TEAM
                  </a>
                </li>
                <li className="nav-item dropdown d-inline-block"> 
  <a
    className="nav-link  text-light"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    PAGES
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a className="dropdown-item" href="#screens">Screens</a></li>
    <li><a className="dropdown-item" href="#testimonial">Testimonial</a></li>
    <li><a className="dropdown-item" href="#blogs">Blogs</a></li>
  </ul>
</li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#built" onClick={handleNavLinkClick}>
                    CAREER
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#footer" onClick={handleNavLinkClick}>
                    CONTACT
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <a className="btn ms-3 dbtn p-2" href="#download" onClick={handleNavLinkClick}>
                  Get App
                </a>
              </div>
            </div>
          </>
        )}

        {location.pathname !== '/' && (
          <div className="h-div">
            <a className="btn ms-3 dbtn p-2" href="/">
              Home
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;

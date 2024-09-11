import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Logo from '../Assets/logo (1).png';
import { useLanguage } from './LanguageContext';

function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('remove');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg rounded-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={Logo} alt="Logo" className="logo-img me-2" />
          <span className="hands-app text-white rounded-3 p-2">
            {language === 'en' ? 'HANDS' : 'الأيدي'}
          </span>
        </a>

        {location.pathname === '/' && (
          <>
            <button
              className="navbar-toggler bg-light"
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
                  <a className="nav-link text-light" href="#" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'HOME' : 'الصفحة الرئيسية'}
                  </a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link text-light" href="#about" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'ABOUT' : 'حول'}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#features" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'FEATURES' : 'الميزات'}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-light" href="#team" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'TEAM' : 'الفريق'}
                  </a>
                </li> */}
                <li className="nav-item dropdown d-inline-block">
                  <a
                    className="nav-link text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {language === 'en' ? 'PAGES' : 'الصفحات'}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#screens">{language === 'en' ? 'Screens' : 'الشاشات'}</a></li>
                    <li><a className="dropdown-item" href="#testimonial">{language === 'en' ? 'Testimonial' : 'الشهادات'}</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#built" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'CAREER' : 'المسيرة المهنية'}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#contact" onClick={handleNavLinkClick}>
                    {language === 'en' ? 'CONTACT' : 'اتصل'}
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn ms-3 dbtn p-2" onClick={toggleLanguage}>
                  {language === 'en' ? 'Arabic' : 'English'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
export default Header;
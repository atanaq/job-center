import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <span>JC</span>
                        </div>
                        <div className="logo-text">
                            <span className="logo-main">МАДК</span>
                            <span className="logo-sub">им. Николаева</span>
                        </div>
                    </Link>

                    <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#professions"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('professions'); }}
                                >
                                    Профессии
                                </a>
                            </li>
                            <li>
                                <Link to="/employers" onClick={() => setIsMobileMenuOpen(false)}>
                                    Работодателям
                                </Link>
                            </li>
                            <li>
                                <a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-right">
                        <button
                            className="cta-btn"
                            onClick={() => scrollToSection('download')}
                        >
                            Скачать приложение
                        </button>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Меню"
                        >
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;

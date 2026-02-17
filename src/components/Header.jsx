import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// SVG иконки
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

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

const Header = ({ searchQuery, setSearchQuery }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Логотип */}
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <span>JC</span>
                        </div>
                        <div className="logo-text">
                            <span className="logo-main">МАДК</span>
                            <span className="logo-sub">им. Николаева</span>
                        </div>
                    </Link>

                    {/* Навигация */}
                    <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#consultation"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('consultation'); }}
                                    className="nav-highlight"
                                >
                                    Студентам
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

                    {/* Правая часть */}
                    <div className="header-right">
                        {/* Поиск */}
                        <div className={`search-wrapper ${isSearchOpen ? 'open' : ''}`}>
                            <input
                                type="text"
                                placeholder="Поиск профессии..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            <button
                                className="search-btn"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                aria-label="Поиск"
                            >
                                <SearchIcon />
                            </button>
                        </div>

                        {/* CTA Кнопка */}
                        <button
                            className="cta-btn"
                            onClick={() => scrollToSection('consultation')}
                        >
                            Оставить заявку
                        </button>

                        {/* Мобильное меню */}
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

            {/* Оверлей для мобильного меню */}
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
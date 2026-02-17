import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Логотип и описание */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <span>JC</span>
                            </div>
                            <div className="logo-text">
                                <span className="logo-main">МАДК</span>
                                <span className="logo-sub">им. Николаева</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Центр содействия трудоустройству — современная платформа
                            для связи студентов и работодателей
                        </p>
                    </div>

                    {/* Контакты */}
                    <div className="footer-contacts">
                        <h4>Контакты</h4>
                        <ul>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <a href="mailto:info@madk.ru">info@madk.ru</a>
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <a href="tel:+78001234567">+7 (800) 123-45-67</a>
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>г. Москва, ул. Примерная, д. 1</span>
                            </li>
                        </ul>
                    </div>

                    {/* Ссылки */}
                    <div className="footer-links">
                        <h4>Информация</h4>
                        <ul>
                            <li><a href="#hero">О центре</a></li>
                            <li><a href="#professions">Профессии</a></li>
                            <li><a href="employers">Работодателям</a></li>
                            <li><a href="#privacy">Конфиденциальность</a></li>
                        </ul>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {currentYear} МАДК им. Николаева. Все права защищены.
                    </div>
                    <div className="footer-legal">
                        <a href="#terms">Соглашение</a>
                        <span>|</span>
                        <a href="#privacy">Конфиденциальность</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
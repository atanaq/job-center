import React from 'react';
import './Hero.css';

// SVG иконки
const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const StarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const TrendingUpIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const DollarSignIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const ZapIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const DatabaseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

const FileTextIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const Hero = () => {
    const advantages = [
        {
            icon: <CheckCircleIcon />,
            title: '100%',
            subtitle: 'трудоустраиваемость',
            color: 'green'
        },
        {
            icon: <StarIcon />,
            title: '500+',
            subtitle: 'положительных отзывов',
            color: 'orange'
        },
        {
            icon: <TrendingUpIcon />,
            title: 'Карьера',
            subtitle: 'долгосрочная перспектива',
            color: 'blue'
        },
        {
            icon: <DollarSignIcon />,
            title: 'от 45 000 ₽',
            subtitle: 'достойная зарплата',
            color: 'purple'
        }
    ];

    const automationFeatures = [
        { icon: <DatabaseIcon />, text: 'Автоматическое сохранение в базу' },
        { icon: <FileTextIcon />, text: 'Генерация документов' },
        { icon: <ZapIcon />, text: 'Мгновенная обработка заявок' }
    ];

    const scrollToConsultation = () => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            {/* Декоративные элементы */}
            <div className="hero-bg">
                <div className="hero-shape shape-1"></div>
                <div className="hero-shape shape-2"></div>
                <div className="hero-shape shape-3"></div>
                <div className="hero-lines">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="line" style={{ '--delay': `${i * 0.5}s` }}></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Левая часть - текст */}
                    <div className="hero-text">
                        <div className="hero-badge">
                            <ZapIcon />
                            <span>Онлайн-консультация</span>
                        </div>

                        <h1 className="hero-title">
                            Центр содействия
                            <span className="highlight"> трудоустройству</span>
                        </h1>

                        <p className="hero-description">
                            Заменили ручной учет на умную автоматизацию.
                            Полная прозрачность трудоустройства для студентов и партнеров.
                        </p>

                        {/* Фичи автоматизации */}
                        <div className="automation-features">
                            {automationFeatures.map((feature, index) => (
                                <div key={index} className="automation-item">
                                    {feature.icon}
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="hero-actions">
                            <button className="btn-primary" onClick={scrollToConsultation}>
                                Оставить заявку
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <a href="tel:+78001234567" className="phone-link">
                                <div className="phone-icon">
                                    <PhoneIcon />
                                </div>
                                <div className="phone-info">
                                    <span className="phone-label">Горячая линия</span>
                                    <span className="phone-number">+7 (800) 123-45-67</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Правая часть - визуал */}
                    <div className="hero-visual">
                        <div className="visual-card main-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                </div>
                                <span>Job.Center</span>
                            </div>
                            <div className="card-stats">
                                <div className="stat">
                                    <span className="stat-value">1,247</span>
                                    <span className="stat-label">Студентов</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">89</span>
                                    <span className="stat-label">Партнеров</span>
                                </div>
                            </div>
                            <div className="card-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '78%' }}></div>
                                </div>
                                <span>78% трудоустроено в этом году</span>
                            </div>
                        </div>

                        <div className="visual-card floating-card card-1">
                            <CheckCircleIcon />
                            <span>Заявка обработана</span>
                        </div>

                        <div className="visual-card floating-card card-2">
                            <FileTextIcon />
                            <span>Документы готовы</span>
                        </div>
                    </div>
                </div>

                {/* Преимущества */}
                <div className="advantages">
                    {advantages.map((adv, index) => (
                        <div
                            key={index}
                            className={`advantage-card color-${adv.color}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="advantage-icon">
                                {adv.icon}
                            </div>
                            <div className="advantage-content">
                                <span className="advantage-title">{adv.title}</span>
                                <span className="advantage-subtitle">{adv.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
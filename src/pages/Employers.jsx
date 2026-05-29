import React from 'react';
import { Link } from 'react-router-dom';
import { APP_INFO } from '../config/appLinks';
import './Employers.css';
import { Monitor } from 'lucide-react';

// SVG иконки
const ArrowLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const UsersIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const FileTextIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const ClockIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const SmartphoneIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

const Employers = () => {

    const benefits = [
        {
            icon: <UsersIcon />,
            title: 'Квалифицированные кадры',
            description: 'Доступ к базе выпускников с актуальными профессиональными навыками'
        },
        {
            icon: <FileTextIcon />,
            title: 'Готовая документация',
            description: 'Автоматическое формирование договоров и соглашений о сотрудничестве'
        },
        {
            icon: <CheckCircleIcon />,
            title: 'Проверенные специалисты',
            description: 'Все кандидаты прошли обучение и имеют подтверждённую квалификацию'
        },
        {
            icon: <ClockIcon />,
            title: 'Быстрый подбор',
            description: 'Оперативный поиск кандидатов под ваши требования в течение 3-5 дней'
        },
        {
            icon: <ShieldIcon />,
            title: 'Гарантия качества',
            description: 'Бесплатная замена специалиста в течение испытательного срока'
        }
    ];

    const steps = [
        { number: '01', title: 'Связь', description: 'Свяжитесь с нами по телефону или email для обсуждения сотрудничества' },
        { number: '02', title: 'Обсуждение', description: 'Наш менеджер уточнит требования к кандидатам и условия партнёрства' },
        { number: '03', title: 'Подбор', description: 'Подберём подходящих кандидатов из базы выпускников' },
        { number: '04', title: 'Собеседование', description: 'Организуем встречу с отобранными специалистами' },
        { number: '05', title: 'Оформление', description: 'Поможем с документальным оформлением сотрудника' }
    ];

    const specializations = [
        'Автомеханики',
        'Сварщики',
        'Электрики',
        'Строители',
        'Слесари',
        'Токари',
        'Монтажники',
        'Наладчики оборудования'
    ];

    return (
        <div className="employers-page">
            {/* Шапка */}
            <header className="employers-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeftIcon />
                        <span>На главную</span>
                    </Link>
                    <div className="header-content">
                        <h1>Сотрудничество с работодателями</h1>
                        <p>Информация для компаний-партнёров центра содействия трудоустройству</p>
                    </div>
                </div>
            </header>

            {/* Преимущества */}
            <section className="benefits-section">
                <div className="container">
                    <h2 className="section-title">Почему работодатели выбирают нас</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Специализации */}
            <section className="specializations-section">
                <div className="container">
                    <h2 className="section-title">Доступные специализации</h2>
                    <p className="section-description">
                        Наши выпускники готовы к работе по следующим направлениям:
                    </p>
                    <div className="specializations-grid">
                        {specializations.map((spec, index) => (
                            <div key={index} className="specialization-tag">
                                {spec}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Этапы сотрудничества */}
            <section className="steps-section">
                <div className="container">
                    <h2 className="section-title">Как начать сотрудничество</h2>
                    <div className="steps-timeline">
                        {steps.map((step, index) => (
                            <div key={index} className="step-item">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Статистика */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">300+</span>
                            <span className="stat-label">Компаний-партнёров</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">1200+</span>
                            <span className="stat-label">Трудоустроенных выпускников</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">95%</span>
                            <span className="stat-label">Довольных работодателей</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">3-5</span>
                            <span className="stat-label">Дней на подбор кандидата</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Контакты и приложение */}
            <section className="employer-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="form-info">
                            <h2>Начать сотрудничество</h2>
                            <p>
                                Для обсуждения партнёрства свяжитесь с нами напрямую.
                                Студенты и выпускники работают через приложение {APP_INFO.name}.
                            </p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <MailIcon />
                                    <a href="mailto:employers@madk.ru">employers@madk.ru</a>
                                </div>
                                <div className="contact-item">
                                    <PhoneIcon />
                                    <a href="tel:+78001234568">+7 (800) 123-45-68</a>
                                </div>
                            </div>
                        </div>

                        <div className="employer-app-cta">
                            <div className="employer-app-icon">
                                <Monitor />
                            </div>
                            <h3>Наше приложение</h3>
                            <p>
                                Подача заявок, консультации и отслеживание статуса —
                                всё доступно в приложении. Скачайте его на главной странице.
                            </p>
                            <Link to="/#download" className="submit-btn">
                                <span>Скачать приложение</span>
                                <SendIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Футер */}
            <footer className="employers-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} МАДК им. Николаева. Центр содействия трудоустройству</p>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </footer>
        </div>
    );
};

export default Employers;
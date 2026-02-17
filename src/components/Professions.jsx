import React, { useState, useMemo } from 'react';
import './Professions.css';

// SVG иконки
const CarIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
        <circle cx="6.5" cy="16.5" r="2.5"></circle>
        <circle cx="16.5" cy="16.5" r="2.5"></circle>
    </svg>
);

const WrenchIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
);

const CpuIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
);

const HardHatIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
        <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
        <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Professions = ({ searchQuery, onApplicationSubmit }) => {
    const [selectedProfession, setSelectedProfession] = useState(null);

    const professions = [
        {
            id: 1,
            title: 'Автомеханик',
            description: 'Техническое обслуживание и ремонт автомобилей',
            icon: <CarIcon />,
            salary: 'от 45 000 ₽',
            vacancies: 12,
            color: 'blue'
        },
        {
            id: 2,
            title: 'Сварщик',
            description: 'Сварочные работы различной сложности',
            icon: <WrenchIcon />,
            salary: 'от 55 000 ₽',
            vacancies: 8,
            color: 'orange'
        },
        {
            id: 3,
            title: 'Электрик',
            description: 'Монтаж и обслуживание электросетей',
            icon: <CpuIcon />,
            salary: 'от 50 000 ₽',
            vacancies: 15,
            color: 'green'
        },
        {
            id: 4,
            title: 'Строитель',
            description: 'Строительно-монтажные работы',
            icon: <HardHatIcon />,
            salary: 'от 48 000 ₽',
            vacancies: 20,
            color: 'purple'
        }
    ];

    const filteredProfessions = useMemo(() => {
        if (!searchQuery) return professions;
        return professions.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const handleApply = (profession) => {
        setSelectedProfession(profession);
        console.log('Заявка на профессию:', profession);
        onApplicationSubmit();
        setTimeout(() => setSelectedProfession(null), 500);
    };

    return (
        <section className="professions" id="professions">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <BriefcaseIcon />
                        <span>Вакансии</span>
                    </div>
                    <h2 className="section-title">
                        Подай заявку на работу
                        <span className="highlight"> по профессии</span>
                    </h2>
                    <p className="section-description">
                        Выберите интересующую профессию и оставьте заявку.
                        Данные автоматически сохраняются в базе.
                    </p>
                </div>

                <div className="professions-grid">
                    {filteredProfessions.map((profession, index) => (
                        <div
                            key={profession.id}
                            className={`profession-card color-${profession.color} ${selectedProfession?.id === profession.id ? 'selected' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="profession-header">
                                <div className="profession-icon">
                                    {profession.icon}
                                </div>
                                <div className="profession-vacancies">
                                    <span>{profession.vacancies}</span>
                                    <small>вакансий</small>
                                </div>
                            </div>

                            <h3 className="profession-title">{profession.title}</h3>
                            <p className="profession-description">{profession.description}</p>

                            <div className="profession-salary">
                                <span className="salary-label">Зарплата</span>
                                <span className="salary-value">{profession.salary}</span>
                            </div>

                            <button
                                className="profession-btn"
                                onClick={() => handleApply(profession)}
                            >
                                <span>Подать заявку</span>
                                <ChevronRightIcon />
                            </button>
                        </div>
                    ))}
                </div>

                {filteredProfessions.length === 0 && (
                    <div className="no-results">
                        <p>По запросу "{searchQuery}" профессий не найдено</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Professions;
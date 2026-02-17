import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Professions from './components/Professions';
import Carousel from './components/Carousel';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import Employers from './pages/Employers';
import './App.css';

// Главная страница
function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showSuccessModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
        setTimeout(() => setIsModalOpen(false), 4000);
    };

    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main>
                <Hero />
                <Professions
                    searchQuery={searchQuery}
                    onApplicationSubmit={() => showSuccessModal('Заявка на профессию принята! Мы автоматически сформируем документы и свяжемся с вами.')}
                />
                <Carousel />
                <ConsultationForm
                    onSubmitSuccess={() => showSuccessModal('Спасибо! Ваша заявка на консультацию принята. Данные сохранены в базе.')}
                />
            </main>
            <Footer />

            {/* Модальное окно успеха */}
            {isModalOpen && (
                <div className="success-modal active">
                    <div className="success-modal-content">
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="22,4 12,14.01 9,11.01" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <p>{modalMessage}</p>
                        <div className="automation-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                            <span>Автоматическая обработка</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/employers" element={<Employers />} />
            </Routes>
        </div>
    );
}

export default App;
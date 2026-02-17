import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const ChevronLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Данные слайдов (можно заменить на реальные фото)
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
            title: 'Наши выпускники',
            description: 'Успешно трудоустроенные специалисты на ведущих предприятиях региона'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
            title: 'Профессиональное обучение',
            description: 'Современные мастерские и опытные преподаватели'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop',
            title: 'Карьерные консультации',
            description: 'Индивидуальный подход к каждому студенту'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop',
            title: 'Истории успеха',
            description: 'Более 1200 выпускников нашли работу мечты'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=600&fit=crop',
            title: 'Партнёрство с работодателями',
            description: '89 компаний-партнёров ждут наших специалистов'
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Автопрокрутка
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    // Пауза при наведении
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <section className="carousel-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Наши <span className="highlight">студенты и выпускники</span>
                    </h2>
                    <p className="section-description">
                        Познакомьтесь с историями успеха наших студентов
                    </p>
                </div>
            </div>

            <div
                className="carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="carousel-container">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="carousel-slide">
                                <div className="slide-image-wrapper">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                    />
                                    <div className="slide-overlay"></div>
                                </div>
                                <div className="slide-content">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Навигационные кнопки */}
                <button
                    className="carousel-btn carousel-btn-prev"
                    onClick={prevSlide}
                    aria-label="Предыдущий слайд"
                >
                    <ChevronLeftIcon />
                </button>
                <button
                    className="carousel-btn carousel-btn-next"
                    onClick={nextSlide}
                    aria-label="Следующий слайд"
                >
                    <ChevronRightIcon />
                </button>

                {/* Индикаторы */}
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Прогресс-бар автопрокрутки */}
                <div className="carousel-progress">
                    <div
                        className="progress-bar"
                        style={{
                            animationDuration: '5s',
                            animationPlayState: isAutoPlaying ? 'running' : 'paused'
                        }}
                        key={currentSlide}
                    ></div>
                </div>
            </div>

            {/* Мини-превью */}
            <div className="container">
                <div className="carousel-thumbnails">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <img src={slide.image} alt={slide.title} />
                            <span className="thumbnail-number">{String(index + 1).padStart(2, '0')}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
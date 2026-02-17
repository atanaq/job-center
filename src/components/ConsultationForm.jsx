import React, { useState } from 'react';
import './ConsultationForm.css';

// Простые SVG иконки вместо lucide-react
const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const DatabaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

const FileCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 15l2 2 4-4"></path>
    </svg>
);

// Функция форматирования телефона
const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 1) return '';
    if (phoneNumberLength < 2) return `+${phoneNumber}`;
    if (phoneNumberLength < 5) return `+${phoneNumber[0]} (${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 8) return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumberLength < 10) return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
};

const ConsultationForm = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Введите ваше имя';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя слишком короткое';
        }

        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (!formData.phone) {
            newErrors.phone = 'Введите номер телефона';
        } else if (phoneDigits.length < 11) {
            newErrors.phone = 'Введите корректный номер';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Имитация отправки на сервер
        console.log('Отправка данных:', formData);

        // Имитация задержки сервера
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setFormData({ name: '', phone: '' });
        onSubmitSuccess();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const formatted = formatPhoneNumber(value);
            setFormData(prev => ({ ...prev, [name]: formatted }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section className="consultation" id="consultation">
            <div className="consultation-bg">
                <div className="bg-pattern"></div>
                <div className="bg-gradient"></div>
            </div>

            <div className="container">
                <div className="consultation-content">
                    {/* Левая часть - информация */}
                    <div className="consultation-info">
                        <h2 className="consultation-title">
                            Оставь заявку на
                            <span className="highlight"> онлайн-консультацию</span>
                        </h2>

                        <p className="consultation-description">
                            Наши специалисты помогут подобрать оптимальную вакансию
                            и ответят на все вопросы о трудоустройстве
                        </p>

                        <div className="info-features">
                            <div className="info-feature">
                                <div className="feature-icon">
                                    <DatabaseIcon />
                                </div>
                                <div className="feature-text">
                                    <span className="feature-title">Автоматическое сохранение</span>
                                    <span className="feature-desc">Данные сохраняются в базе</span>
                                </div>
                            </div>

                            <div className="info-feature">
                                <div className="feature-icon">
                                    <FileCheckIcon />
                                </div>
                                <div className="feature-text">
                                    <span className="feature-title">Генерация документов</span>
                                    <span className="feature-desc">Документы формируются автоматически</span>
                                </div>
                            </div>

                            <div className="info-feature">
                                <div className="feature-icon">
                                    <ShieldIcon />
                                </div>
                                <div className="feature-text">
                                    <span className="feature-title">Защита данных</span>
                                    <span className="feature-desc">Полная конфиденциальность</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - форма */}
                    <div className="consultation-form-wrapper">
                        <form className="consultation-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <h3>Записаться на консультацию</h3>
                                <p>Заполните форму и мы свяжемся с вами</p>
                            </div>

                            <div className={`form-group ${errors.name ? 'error' : ''}`}>
                                <label htmlFor="name">
                                    <UserIcon />
                                    <span>Ваше имя</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Введите ваше имя"
                                    disabled={isSubmitting}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                                <label htmlFor="phone">
                                    <PhoneIcon />
                                    <span>Номер телефона</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (___) ___-__-__"
                                    disabled={isSubmitting}
                                    maxLength={18}
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        <span>Отправка...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Отправить заявку</span>
                                        <SendIcon style={{ }} />
                                    </>
                                )}
                            </button>

                            <p className="form-note">
                                Нажимая кнопку, вы соглашаетесь с
                                <a href="#privacy"> политикой конфиденциальности</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationForm;
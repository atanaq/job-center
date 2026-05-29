import React from 'react';
import { APP_INFO } from '../config/appLinks';
import './DownloadApp.css';

const SmartphoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const BellIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);

const FileCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 15l2 2 4-4"></path>
    </svg>
);

const GooglePlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 0 1-.601-.92V2.734a1 1 0 0 1 .601-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
    </svg>
);

const AppleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
);

const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

const DownloadButton = ({ href, icon, label, sublabel, disabled }) => {
    if (disabled) {
        return (
            <div className="download-btn download-btn-disabled" aria-disabled="true">
                <span className="download-btn-icon">{icon}</span>
                <span className="download-btn-text">
                    <small>{sublabel}</small>
                    <strong>{label}</strong>
                </span>
            </div>
        );
    }

    return (
        <a
            href={href}
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="download-btn-icon">{icon}</span>
            <span className="download-btn-text">
                <small>{sublabel}</small>
                <strong>{label}</strong>
            </span>
        </a>
    );
};

const DownloadApp = () => {
    const features = [
        {
            icon: <BriefcaseIcon />,
            title: 'Подача заявок',
            desc: 'Выбирайте профессию и отправляйте заявку прямо из приложения',
        },
        {
            icon: <BellIcon />,
            title: 'Уведомления',
            desc: 'Получайте статус рассмотрения и напоминания о собеседованиях',
        },
        {
            icon: <FileCheckIcon />,
            title: 'Документы',
            desc: 'Доступ к сформированным документам и истории обращений',
        },
    ];

    const hasAndroid = Boolean(APP_INFO.androidUrl || APP_INFO.apkUrl);
    const hasIos = Boolean(APP_INFO.iosUrl);

    return (
        <section className="download-app" id="download">
            <div className="download-app-bg">
                <div className="bg-pattern"></div>
                <div className="bg-gradient"></div>
            </div>

            <div className="container">
                <div className="download-app-content">
                    <div className="download-app-info">

                        <h2 className="download-app-title">
                            Скачайте
                            <span className="highlight"> {APP_INFO.name}</span>
                        </h2>

                        <p className="download-app-description">
                            {APP_INFO.description}
                            Этот сайт - информационная витрина центра. Все действия
                            выполняются в приложении.
                        </p>

                        <div className="info-features">
                            {features.map((feature, index) => (
                                <div key={index} className="info-feature">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-text">
                                        <span className="feature-title">{feature.title}</span>
                                        <span className="feature-desc">{feature.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="download-app-card">
                        <div className="app-preview">
                            <div className="app-preview-header">
                                <div className="app-preview-icon">JC</div>
                                <div>
                                    <strong>{APP_INFO.name}</strong>
                                    <span>МАДК им. Николаева</span>
                                </div>
                            </div>
                            <div className="app-preview-stats">
                                <div><span>1 247</span><small>студентов</small></div>
                                <div><span>89</span><small>партнёров</small></div>
                                <div><span>55</span><small>вакансий</small></div>
                            </div>
                            <div className="app-preview-bar">
                                <div style={{ width: '78%' }}></div>
                            </div>
                            <p className="app-preview-note">78% трудоустроено в этом году</p>
                        </div>

                        <div className="download-buttons">
                            <DownloadButton
                                href={APP_INFO.androidUrl || APP_INFO.apkUrl}
                                icon={<GooglePlayIcon />}
                                sublabel="Доступно в"
                                label="Google Play"
                                disabled={!hasAndroid}
                            />
                            <DownloadButton
                                href={APP_INFO.iosUrl}
                                icon={<AppleIcon />}
                                sublabel="Загрузите в"
                                label="App Store"
                                disabled={!hasIos}
                            />
                            {APP_INFO.apkUrl && (
                                <DownloadButton
                                    href={APP_INFO.apkUrl}
                                    icon={<DownloadIcon />}
                                    sublabel="Прямая загрузка"
                                    label="APK для Android"
                                    disabled={false}
                                />
                            )}
                        </div>

                        {!hasAndroid && !hasIos && (
                            <p className="download-note">
                                Приложение скоро будет доступно для скачивания.
                                Следите за обновлениями на сайте или звоните на горячую линию.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;

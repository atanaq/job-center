import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Professions from './components/Professions';
import Carousel from './components/Carousel';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import Employers from './pages/Employers';
import './App.css';

function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Professions />
                <Carousel />
                <DownloadApp />
            </main>
            <Footer />
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

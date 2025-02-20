import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Importă configurarea i18n
import './locales/en/translation.json';
import './locales/ro/translation.json';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Router>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link to="/">{t('Home')}</Link></li>
            <li><Link to="/about">{t('About')}</Link></li>
            <li><Link to="/contact">{t('Contact')}</Link></li>
          </ul>
        </nav>
        <button className="lang-button" onClick={toggleLanguage}>
          {i18n.language === 'en' ? '🇷🇴 Schimbă limba' : '🇬🇧 Change Language'}
        </button>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

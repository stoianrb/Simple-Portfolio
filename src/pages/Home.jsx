import { useTranslation } from 'react-i18next';
import '../i18n';  // Importă configurarea i18n

function Home() {
  const { t, i18n } = useTranslation(); // Hook pentru traducere

  const handleLanguageChange = () => {
    // Schimbă limba la română sau engleză
    const newLang = i18n.language === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="content">
      {/* Titlu și descriere */}
      <h1>{t("Welcome")}</h1>
      <p>{t("This is Robert Portfolio")}</p>

      {/* Butonul de schimbare a limbii */}
      <button
        className="language-button"
        onClick={handleLanguageChange}
        style={{ position: 'absolute', top: '20px', right: '20px' }} // Poziționează butonul în colțul din dreapta sus
      >
        {t('change_language')}
      </button>

      {/* Linkuri social media */}
      <div className="social-media-links">
        <a href="https://www.tiktok.com/@robert_stoian" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <i className="fab fa-tiktok"></i> {t("Tiktok")}
          </button>
        </a>
        <a href="https://www.youtube.com/@Robert_Stoian" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <i className="fab fa-youtube"></i> {t("Youtube")}
          </button>
        </a>
        <a href="https://www.facebook.com/stoian.robert.547" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <i className="fab fa-facebook"></i> {t("Facebook")}
          </button>
        </a>
        <a href="https://www.instagram.com/robert_frizerul" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <i className="fab fa-instagram"></i> {t("Instagram")}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;

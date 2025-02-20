import { useTranslation } from 'react-i18next';
import './Footer.css'; // Adăugăm fișierul de stiluri (dacă dorești stiluri personalizate pentru footer)

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t("© 2025 Robert. All rights reserved.")}</p>
      <p>{t("Contact us at:")} <a href="mailto:stoianrb@gmail.com">stoianrb@gmail.com</a></p>
    </footer>
  );
}

export default Footer;

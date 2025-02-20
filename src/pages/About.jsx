import { useTranslation } from 'react-i18next';
import './About.css';
import '../i18n';

function About() {
  const { t, i18n } = useTranslation();

  // Funcția pentru schimbarea limbii
  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'ro' : 'en'; // Definirea variabilei newLang
    i18n.changeLanguage(newLang); // Schimbarea limbii
  };

  return (
    <div className="about-container">
      {/* Butonul de schimbare limbă */}
      <button
        className="language-button"
        onClick={handleLanguageChange}
        style={{
          position: 'fixed', // Plasează-l într-un loc fix pe ecran
          top: '20px', // Ajustează poziția butonului (poziție fixă)
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {i18n.language === 'en' ? 'RO' : 'EN'} {/* Textul butonului va arăta limba selectată */}
      </button>

      <h1>{t("About Me")}</h1>
      <p>{t("I am a responsible, organized, and solution-oriented person, with a practical approach to solving professional challenges. I have a good ability to adapt and work efficiently both in a team and independently. I focus on achieving the best results while maintaining constant respect for the needs and goals of those I collaborate with. I am open to new learning opportunities and aim to actively contribute to the success of any project I am involved in.")}</p>

      <p>{t("LinkedIn")}: <a href="https://www.linkedin.com/in/robert-stoian-377a24349?utm_source=share&utm_campaign=share_via&utm_content=prole&utm_m" target="_blank" rel="noopener noreferrer">Robert Stoian</a></p>
      <p>{t("GitHub")}: <a href="https://www.github.com/stoianrb/" target="_blank" rel="noopener noreferrer">stoianrb</a></p>

      <h2>{t("Experience")}</h2>
      <p><strong>{t("Frizer @ SC Eduard Forfecuta SRL")}</strong> ({t("April 2023 - Present")}) - {t("Professional barber with a genuine passion for the craft and a refined aesthetic sense, able to transform each haircut into a work of art. Specialized in customized haircuts, shaving, and styling, offering high-quality services in a friendly and relaxing environment.")}</p>
      <p><strong>{t("Frizer @ S.C. Crismideea Zaak SRL")}</strong> ({t("March 2022 - April 2023")}) - {t("Dedicated professional in the art of haircuts and beard care, with a well-developed sense of aesthetics and attention to detail. Experience in creating different styles of haircuts, tailored to client preferences and current trends. Excellent communication and counseling skills to offer personalized services.")}</p>
      <p><strong>{t("Frizer @ Oasis Style SRL")}</strong> ({t("October 2019 - March 2022")}) - {t("Passionate barber with experience in modern and classic haircuts, shaving, and beard styling. Excellent communication skills and the ability to offer personalized services and recommendations based on each client's style.")}</p>
      <p><strong>{t("Parental Leave")}</strong> ({t("December 2017 - October 2018")}) - {t("This period contributed to developing my time management, organization, multitasking, and decision-making skills, providing valuable personal and professional experience.")}</p>
      <p><strong>{t("Team Coordinator @ SC Mega Image SRL")}</strong> ({t("April 2009 - December 2017")}) - {t("Organized and proactive leader with experience in managing and coordinating teams for the opening of new locations. Responsible for planning, implementing, and supervising all steps necessary for the successful launch of stores while ensuring compliance with company standards.")}</p>
      <p><strong>{t("Receptionist @ Kaufland")}</strong> ({t("September 2008 - February 2009")}) - {t("Organized and detail-oriented individual with experience in receiving and verifying goods according to delivery documents. Skills in stock management, quality control, and collaboration with the logistics team to ensure smooth goods flow.")}</p>
      <p><strong>{t("Receptionist @ SC Mega Image SA")}</strong> ({t("August 2006 - August 2008")}) - {t("Responsible and organized with experience in receiving and managing goods, ensuring efficient flow in the warehouse. Able to verify delivery documents, control the quantity and quality of products, and collaborate effectively with the team.")}</p>

      <h2>{t("Education")}</h2>
      <p><strong>{t("Ecology and Environmental Protection, High School / Vocational School")}</strong> - {t("Grup Scolar Agricol Cezar Nicolau, 2005 - 2008")}</p>
      <p><strong>{t("Mechanical Engineering, High School / Vocational School")}</strong> - {t("Grup Scolar Industrial Constructii Cai Ferate, 2002 - 2005")}</p>

      <h2>{t("Languages")}</h2>
      <p>{t("Romanian")}: {t("Native")}</p>
      <p>{t("English")}: {t("Advanced")}</p>

      <h2>{t("Skills")}</h2>
      <ul>
        <li>{t("Excellent communication skills")}</li>
        <li>{t("Shaving techniques")}</li>
        <li>{t("Web Design, JavaScript, HTML, CSS, Flutter, Expo Go, React, React Native")}</li>
        <li>{t("Problem-solving and adaptability")}</li>
        <li>{t("Teamwork and customer relations management")}</li>
        <li>{t("Attention to detail and creative thinking")}</li>
        <li>{t("Up-to-date with the latest hairstyling trends")}</li>
      </ul>
    </div>
  );
}

export default About;

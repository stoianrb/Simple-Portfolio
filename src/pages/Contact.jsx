import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t("Contact Me")}</h1>
      <p style={styles.text}>{t("If you have any questions or would like to collaborate, feel free to reach out!")}</p>
      <p style={styles.text}>
        <strong>{t("Email")}:</strong> 
        <a href="mailto:stoianrb@gmail.com" style={styles.link}> stoianrb@gmail.com</a>
      </p>
      <p style={styles.text}>
        <strong>{t("Phone")}:</strong> 
        <a href="tel:+40770867356" style={styles.link}> +40770867356</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.4rem',
    color: '#333',
    marginBottom: '1rem',
  },
  link: {
    fontSize: '1.4rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Contact;

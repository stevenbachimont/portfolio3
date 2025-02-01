import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import Glitch from "../../components/glitchtext/GlitchText.jsx";
import { getImageUrl } from "../../utils";


function Home() {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Glitch 
          component="h1"
          className={`${styles.glitchText}`} 
          text={t('hero.title')} 
          aria-hidden="false" 
        />
        <p className={styles.description}>{t('hero.description')}</p>
        <a href="https://stevenbachimont.github.io/cv/" target="_blank" className={styles.contactBtn} download>
          {t('hero.cvLink')}
        </a>
      </div>
    </section>
  );
}

export default Home;

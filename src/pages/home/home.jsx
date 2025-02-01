import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";
import Glitch from "../../components/glitchtext/GlitchText.jsx";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img 
            src={getImageUrl("moi.png")}
            alt="Steven Bachimont" 
            className={styles.backgroundImage} 
          />
          <Glitch 
            component="h1"
            className={`${styles.glitchText}`} 
            text={t('hero.title')} 
            aria-hidden="false" 
          />
        </div>
        <p className={styles.description}>{t('hero.description')}</p>
        <a href="https://stevenbachimont.github.io/cv/" target="_blank" className={styles.contactBtn} download>
          {t('hero.cvLink')}
        </a>
      </div>
    </section>
  );
}

export default Home;

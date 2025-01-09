import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

function Home() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.description}>{t('hero.description')}</p>
        <a href="https://stevenbachimont.github.io/cv/" target="_blank" className={styles.contactBtn} download>
          {t('hero.cvLink')}
        </a>
      </div>
    </section>
  );
}

export default Home;

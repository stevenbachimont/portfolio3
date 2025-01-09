import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {Link} from "react-router-dom";

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
      <nav className={styles.navbar}>
          <Link to="/" className={styles.title}>{t('nav.title')}</Link>
        <div className={styles.menu}>
          <img
              className={styles.menuBtn}
              src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
              }
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
          >
            <Link to={"/shop"} className="headLien">{t('nav.shop')}</Link>
            <Link to="/cart" className="headLien">{t('nav.cart')}</Link>
            <li>
              <label className={styles.switch}>
                <span className={styles.tr}>EN</span>
                <input 
                  type="checkbox" 
                  checked={i18n.language === 'fr'}
                  onChange={toggleLanguage}
                />
                <span className={`${styles.slider} ${styles.round}`}></span>
                <span className={styles.tr}>FR</span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;



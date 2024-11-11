import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {Link} from "react-router-dom";

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <nav className={styles.navbar}>
          <Link to="/" className={styles.title}>shopfolio</Link>
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
            <Link to={"/shop"} className="headLien">shop</Link>
            <Link to="/cart" className="headLien">cart</Link>
            <li>
              <label className={styles.switch}>
                <span className={styles.tr}>EN</span>
                <input type="checkbox" onChange={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}/>
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



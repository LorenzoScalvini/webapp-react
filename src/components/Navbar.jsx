import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.brand} to="/">
          <img
            className={styles.logo}
            src="http://localhost:3000/public/images/logo.png"
            alt="logoimg"
          />
          MovieApp
        </Link>
        <button className={styles.toggler} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/">
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/about">
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

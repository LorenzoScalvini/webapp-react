import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/terms" className={styles.navLink}>
              Terms
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/privacy" className={styles.navLink}>
              Privacy
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

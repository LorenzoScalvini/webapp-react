import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h4 className={styles.title}>MovieApp</h4>
            <p className={styles.description}>
              Your go-to app for movie reviews and ratings.
            </p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.title}>Links</h4>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/terms" className={styles.navLink}>
                  Terms of Use
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/privacy" className={styles.navLink}>
                  Privacy Policy
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/contact" className={styles.navLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.title}>Follow Us</h4>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a href="https://facebook.com" className={styles.socialLink}>
                  Facebook
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://twitter.com" className={styles.socialLink}>
                  Twitter
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://instagram.com" className={styles.socialLink}>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

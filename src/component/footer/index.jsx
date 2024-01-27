import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container"></div>
      <div className={styles.footerContent}>
        <h4>Community Rules</h4>
        <h4>Support</h4>
        <h4>Creator Terms</h4>
        <h4>Brand Terms</h4>
        <h4>Privacy Policy</h4>
      </div>
      <hr className={styles.footerLine} />
      <div className={styles.footerSignature}>
        <h2>Sharely</h2>
        <p className={styles.footer__text}>
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

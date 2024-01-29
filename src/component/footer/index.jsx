import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import SupportLink from "../SupportLink";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container"></div>
      <div className={styles.footerContent}>
        <Link className={styles.footerLink} to="/community-rules">
          Community Rules
        </Link>
        <SupportLink />
        <Link className={styles.footerLink} to="/creator-terms">
          Creator Terms
        </Link>
        <Link className={styles.footerLink} to="/brand-terms">
          Brand Terms
        </Link>
        <Link className={styles.footerLink} to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className={styles.footerLink} to="/">
          Home
        </Link>
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

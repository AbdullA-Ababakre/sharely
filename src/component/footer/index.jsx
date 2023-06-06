import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.footer__text}>© 2023. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

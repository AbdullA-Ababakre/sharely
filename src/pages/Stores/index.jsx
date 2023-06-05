import React from 'react';
import styles from './index.module.scss';
import TiktokColeection from '../../../src/assets/tiktok.png';

function Stores() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Sharely</div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.sum}>Put UGC and partnerships on sharely for your store</div>
            <div className={styles.detail}>Save time . Save money. Automate your content with pay-for-performance creator marketing.</div>
          </div>
          <div className={styles.imageWrap}>
            <img className={styles.image} src={TiktokColeection} alt="tiktok" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;

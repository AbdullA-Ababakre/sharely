import React from "react";
import styles from "./index.module.scss";
import TiktokColeection from "../../assets/tiktok.png";
import creatorsGuide from "../../assets/creator-guide.png";
import Footer from "../../component/footer/index";
import Gallery from "../../component/Gallery/index";

function Creators() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Sharely</div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.sum}>
              Partner with your favorite stores, instantly
            </div>
            <div className={styles.detail}>
              Show and share what you love. Get paid every time,and build
              relationships with your favorite stores
            </div>
          </div>
          <div className={styles.imageWrap}>
            <img className={styles.image} src={TiktokColeection} alt="tiktok" />
          </div>
        </div>
      </div>
      <Gallery />
      <div className={styles.creatorsGuide}>
        <img
          className={styles.creatorsGuideImage}
          src={creatorsGuide}
          alt="creator-guide"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Creators;

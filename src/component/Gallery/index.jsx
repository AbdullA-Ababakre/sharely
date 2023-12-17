import React from "react";
import styles from "./index.module.scss";
// import restaurant from "../../assets/restaurant.jpeg";
// import coffeeshop from "../../assets/coffeeShop.jpeg";
// import movie from "../../assets/movie.webp";
// import sport from "../../assets/baskitball.webp";

import one from "../../assets/11.png";
import two from "../../assets/22.png";
import three from "../../assets/33.png";
import four from "../../assets/44.png";

function Gallery() {
  const navigateToProduct = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.title}>Share and Earn</div>
      <div className={styles.list}>
        <div
          className={styles.storeInfo}
          onClick={() => navigateToProduct("https://lightspaceai.com/")}
        >
          <img className={styles.storeImg} src={one} alt="" />
          <p>Lightspace</p>
        </div>
        <div
          className={styles.storeInfo}
          onClick={() => navigateToProduct("https://musicfy.lol/")}
        >
          <img className={styles.storeImg} src={two} alt="" />
          <p>Musicfy</p>
        </div>
        <div
          className={styles.storeInfo}
          onClick={() => navigateToProduct("https://www.myaiclone.co/")}
        >
          <img className={styles.storeImg} src={three} alt="" />
          <p>MyAiClone</p>
        </div>
        <div
          className={styles.storeInfo}
          onClick={() => navigateToProduct("https://www.sourcely.net/")}
        >
          <img className={styles.storeImg} src={four} alt="" />
          <p>Sourcely</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

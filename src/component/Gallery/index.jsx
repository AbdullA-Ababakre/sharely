import React from "react";
import styles from "./index.module.scss";
import restaurant from "../../assets/restaurant.jpeg";
import coffeeshop from "../../assets/coffeeShop.jpeg";
import movie from "../../assets/movie.webp";
import sport from "../../assets/baskitball.webp";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>Share</div>
      <div className={styles.list}>
        <div className={styles.storeInfo}>
          <img className={styles.storeImg} src={restaurant} alt="" />
          <p>Restaurant</p>
        </div>
        <div className={styles.storeInfo}>
          <img className={styles.storeImg} src={coffeeshop} alt="" />
          <p>Coffee</p>
        </div>
        <div className={styles.storeInfo}>
          <img className={styles.storeImg} src={movie} alt="" />
          <p>Movie</p>
        </div>
        <div className={styles.storeInfo}>
          <img className={styles.storeImg} src={sport} alt="" />
          <p>sport</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

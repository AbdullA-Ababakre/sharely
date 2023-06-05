import React from 'react';
import styles from './index.module.scss';
import restaurant from '../../assets/restaurant.jpeg';
import coffeeshop from '../../assets/coffeeShop.jpeg';
import movie from '../../assets/movie.webp';
import sport from '../../assets/baskitball.webp';

function Gallery() {
    return (
        <div className={styles.gallery}>
            <div className={styles.title}>Share</div>
            <div className={styles.list}>
                <div className={styles.storeInfo}>
                    <img className={styles.storeImg} src={restaurant} alt="" />
                    <div>Restaurant</div>
                </div>
                <div className={styles.storeInfo}>
                    <img className={styles.storeImg} src={coffeeshop} alt="" />
                    <div>Coffee</div>
                </div>
                <div className={styles.storeInfo}>
                    <img className={styles.storeImg} src={movie} alt="" />
                    <div>Movie</div>
                </div>
                <div className={styles.storeInfo}>
                    <img className={styles.storeImg} src={sport} alt="" />
                    <div>sport</div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

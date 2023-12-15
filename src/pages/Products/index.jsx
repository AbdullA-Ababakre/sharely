import React from "react";
import styles from "./index.module.scss";
import TiktokColeection from "../../../src/assets/tiktok.png";
import Button from "../../component/Button/index";

function Stores() {

  const toBrandsForm = ()=>{
    window.open('https://forms.gle/NvpwA6ZZnVE6WZ316', '_blank')
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Sharely</div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.sum}>
              Get organic customer growth with your customers’ content
            </div>
            <div className={styles.detail}>
              <ol type="I">
                <li>Inform customers about the opportunity</li>
                <li>Customers post content featuring your product</li>
                <li>Get organic customer growth</li>
              </ol>
            </div>
            <Button onClick={toBrandsForm}></Button>
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

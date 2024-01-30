import React from "react";
import styles from "./index.module.scss";
import Footer from "../../component/footer/index";
import Gallery from "../../component/Gallery/index";
import Button from "../../component/Button/index";
import myVideo from "../../assets/video.MOV";

function Creators() {
  const toCreatorsForm = () => {
    window.open("https://forms.gle/srnze6uN7DuC7rUA7", "_blank");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Sharely</div>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.textContentTitle}>
              Get paid by creating content about your favorite product
            </p>
            <ol className={styles.textContentDetail} type="I">
              <li>Create content featuring your favorite product</li>
              <li>Post the content following our guidelines</li>
              <li>Get paid for views within the first 48 hrs</li>
            </ol>
            <div className={styles.startBtn}>
              <Button onClick={toCreatorsForm} text="Get Started"></Button>
            </div>
          </div>

          <video className={styles.videoContent} autoPlay muted loop>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Creators;

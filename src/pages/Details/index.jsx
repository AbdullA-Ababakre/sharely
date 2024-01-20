import React from "react";
import styles from "./index.module.scss";
import ButtonPrimary from "../../component/Button";
import { isArray } from "lodash";
import { useSelector } from "react-redux";
import { selectCurrentBrand } from "../../slice/brandSlice";
import { useNavigate } from "react-router-dom";
import { Slider } from "../../component/Slider";

function Details() {
  const currentBrand = useSelector(selectCurrentBrand);
  const navigate = useNavigate();

  if (currentBrand.id === 0) {
    navigate("/");
  }

  const brandNote = currentBrand?.notes;
  const brandRules = currentBrand?.rules;
  const bounty = currentBrand?.bounty;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles?.pageTitle}>
          {currentBrand.title} Content Details
        </h2>
       
        <div className="">
          <h3 className={styles.rulesTitle}>Product Link</h3>
          <a href={currentBrand.productLink} target="_blank" rel="noreferrer">
            You can explore the product here
          </a>
        </div>

        <div className="">
          <h3 className={styles.rulesTitle}>
            A few notes from {currentBrand.title}
          </h3>
          <div className={styles.rules}>
            {isArray(brandNote) &&
              brandNote?.map((item, index) => (
                <div key={"itemDesc" + index} className={styles.box}>
                  <p> {item}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="">
          <h3 className={styles.rulesTitle}>Rules</h3>
          <div className={styles.rules}>
            {isArray(brandRules) &&
              brandRules?.map((item, index) => (
                <div key={"itemDesc" + index} className={styles.box}>
                  <p> {item}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="">
          <h3 className={styles.rulesTitle}>Bounty</h3>
          <div className={styles.rules}>
            {isArray(bounty) &&
              bounty?.map((item, index) => (
                <div key={"itemDesc" + index} className={styles.box}>
                  <p> {item}</p>
                </div>
              ))}
          </div>
        </div>
        <div
        className=""
        style={{ width: "350px", height: "610px", margin: "0 auto" }}
      >
        <Slider />
      </div>   
        <div className="">
          <ButtonPrimary
            onClick={() => {
              window.location.href = "https://forms.gle/srnze6uN7DuC7rUA7";
              return null;
            }}
            style={{ backgroundColor: "#4B4BFF", color: "white" }}
            text="Accept"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;

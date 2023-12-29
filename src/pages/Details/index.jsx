import React from "react";
import styles from "./index.module.scss";
import ButtonPrimary from "../../component/Button";
import { isArray } from "lodash";
import { useSelector } from "react-redux";
import { selectCurrentBrand } from "../../slice/brandSlice";

function Details() {
  const currentBrand = useSelector(selectCurrentBrand);
  const brandNote = currentBrand.notes;
  const brandRules = currentBrand.rules;
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.pageTitle}>
          {currentBrand.title} Content Details
        </h2>
        <div className={styles.brandNote}>
          <h3 className={styles.rulesTitle}>
            A few notes from {currentBrand.title}
          </h3>
          <div className={styles.brandNoteBox}>
            <p>{brandNote}</p>
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
          <ButtonPrimary
            onClick={() => {}}
            style={{ backgroundColor: "#4B4BFF", color: "white" }}
            text="Accept"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;

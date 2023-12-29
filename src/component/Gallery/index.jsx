import React from "react";
import styles from "./index.module.scss";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveBrands, setCurrentBrand } from "../../slice/brandSlice";
import { useNavigate } from "react-router";

function Gallery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProduct = (id) => {
    navigate("/detail");
    dispatch(setCurrentBrand(id));
  };

  const brands = useSelector(selectActiveBrands);
  console.log(brands);
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>Share and Earn</div>
      <div className={styles.list}>
        {brands?.map((item, index) => {
          return (
            <ProductCard
              key={index}
              title={item.title}
              imageUrl={item.imageSrc}
              descriptions={[{ title: "", descriptions: item.desc }]}
              onCardLick={() => navigateToProduct(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

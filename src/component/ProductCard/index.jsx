import React from "react";
import "./index.scss";

function ProductCard({
  title,
  imageUrl,
  descriptions = [],
  onCardLick = () => {},
}) {
  return (
    <div className="wrapper" onClick={onCardLick}>
      <div className="container">
        <img alt="item" className="top" src={imageUrl} />
        <div className="bottom">
          <p className="product-title">{title}</p>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">Info</i>
        </div>
        <div className="contents">
          <div className="contents-container">
            {descriptions?.map((desc, index) => (
              <p className="desc" key={index}>
                <b>{desc?.title} </b>
                <span> {desc.descriptions}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

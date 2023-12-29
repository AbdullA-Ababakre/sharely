import React, { useState } from "react";
import Creators from "./pages/Creators/index.jsx";
import Products from "./pages/Products/index.jsx";
import Styles from "./app.module.scss";
function App() {
  const [userType, setUserType] = useState("creators");

  const handleClick = (type) => {
    setUserType(type);
  };

  return (
    <div>
      <div className={Styles.header}>
        <div
          className={
            userType === "creators"
              ? `${Styles.activeBox} ${Styles.box}`
              : Styles.box
          }
          onClick={() => handleClick("creators")}
        >
          For Creators
        </div>
        <div
          className={
            userType === "products"
              ? `${Styles.activeBox} ${Styles.box}`
              : Styles.box
          }
          onClick={() => handleClick("products")}
        >
          For Brands
        </div>
      </div>
      {userType === "creators" && <Creators></Creators>}
      {userType === "products" && <Products></Products>}
    </div>
  );
}

export default App;

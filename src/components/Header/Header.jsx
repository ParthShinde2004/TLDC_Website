import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (   
    <div className={styles.devilsHeader}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <img
            alt=""
            className={styles.devilsLogo}
            src="https://static.overlay-tech.com/assets/449acdfe-7c23-4f5c-a64b-6f4f1c4145a5.png"
          />
        </div>
        <div className={styles.menus}>
          <p className={styles.about}>Home</p>
          <p className={styles.mintADevil}>The Underworld</p>
          <p className={styles.mintADevil}>Vision Map</p>
          <p className={styles.about}>Mint</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.twitter}>
            <img
              alt=""
              className={styles.vector}
              src="https://static.overlay-tech.com/assets/6aa9881b-764e-483d-a292-055f5c2d7a6f.svg"
            />
          </div>
          <div className={styles.twitter}>
            <img
              alt=""
              className={styles.vectorTwo}
              src="https://static.overlay-tech.com/assets/af3ae243-cb08-4913-a4ab-270a5f122d08.svg"
            />
          </div>
          <div className={styles.twitter}>
            <img
              alt=""
              className={styles.vectorThree}
              src="https://static.overlay-tech.com/assets/81af14be-e9a9-4d9b-ac74-2d2705a9c848.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
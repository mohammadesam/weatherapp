import React from "react";
import styles from "../styles/nav.module.css";

export default function Nav({ onToggleMenu }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contaiener}>
        <div className={styles.nav}>
          <img
            src="/images/menu.svg"
            onClick={onToggleMenu}
            alt=""
            className={styles.icon}
          />
          <img src="/images/search.svg" alt="" className={styles.icon} />
        </div>
        <div className={styles.midPart}>
          <h2> Khartoum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
}

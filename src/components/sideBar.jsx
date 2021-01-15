import React from "react";
import styles from "../styles/sideBar.module.css";

export default function sideBar({ opened }) {
    return (
      <div className={opened? styles.show: styles.hide}>
        <h3>Weather App</h3>
        <ul className={styles.Ul}>
          <li className={styles.listItem}> lorem </li>
          <li> lorem </li>
          <li> lorem </li>
          <li> lorem </li>
        </ul>
      </div>
    );
}

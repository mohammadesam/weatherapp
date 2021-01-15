import React from "react";
import styles from "../styles/nav.module.css";
import { ReactComponent as Logo } from "../icons/wi-day-sunny-overcast.svg";
export default function WeatherIcon() {
  return <Logo className={styles.weatherIcon}></Logo>;
}

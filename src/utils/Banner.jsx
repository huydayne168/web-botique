import React from "react";
import styles from "./Banner.module.css";
const Banner = ({ text }) => {
    return <div className={styles.banner}>{text}</div>;
};

export default Banner;

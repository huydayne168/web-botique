import React from "react";
import styles from "./MainNavigation.module.css";
const LayoutMainContent = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};

export default LayoutMainContent;

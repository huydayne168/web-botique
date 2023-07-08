import React from "react";
import styles from "./MainCartContent.module.css";
import ItemsBox from "./ItemsBox";
import SummaryBox from "./SummaryBox";
import DirectionBar from "./DirectionBar";

const MainCartContent = () => {
    return (
        <div className={styles["main-content"]}>
            <h1>shopping cart</h1>
            <div className={styles.body}>
                <ItemsBox />
                <SummaryBox />
                <DirectionBar />
            </div>
        </div>
    );
};

export default MainCartContent;

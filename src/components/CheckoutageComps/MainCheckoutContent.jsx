import React from "react";
import styles from "./MainCheckoutContent.module.css";
import CheckoutForm from "./CheckoutForm";
import OrderBox from "./OrderBox";
const MainCheckoutContent = () => {
    return (
        <div className={styles["main-content"]}>
            <h1 className={styles.heading}>billing details</h1>
            <div className={styles.body}>
                <CheckoutForm />
                <OrderBox />
            </div>
        </div>
    );
};

export default MainCheckoutContent;

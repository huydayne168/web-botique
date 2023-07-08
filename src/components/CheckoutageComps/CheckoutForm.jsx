import React from "react";
import styles from "./CheckoutForm.module.css";
const CheckoutForm = () => {
    return (
        <form action="#" className={styles["checkout-form"]}>
            <div className={styles["controls"]}>
                <label htmlFor="full-name">full name:</label>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Enter Your Full Name Here!"
                />
            </div>
            <div className={styles["controls"]}>
                <label htmlFor="full-name">email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Here!"
                />
            </div>
            <div className={styles["controls"]}>
                <label htmlFor="phone">phone number:</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number Here!"
                />
            </div>
            <div className={styles["controls"]}>
                <label htmlFor="address">address:</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your Address Here!"
                />
            </div>

            <button>Place order</button>
        </form>
    );
};

export default CheckoutForm;

import React from "react";
import styles from "./SummaryBox.module.css";
import usePrice from "../../hooks/use-price";
import { useSelector } from "react-redux";
import { cartActions } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
const SummaryBox = () => {
    const commafy = usePrice();
    const cart = useSelector((state) => state.cart);

    const totalPrice = cart.reduce((init, cartItem) => {
        return init + cartItem.price;
    }, 0);
    return (
        <div className={styles["summary-box"]}>
            <div className={styles.heading}>Cart total</div>
            <div className={styles["row"]}>
                <div className={styles.tag}>subtotal</div>
                <div className={styles["subtotal-price"]}>
                    {commafy(totalPrice)} VND
                </div>
            </div>
            <hr />
            <div className={styles["row"]}>
                <div className={styles.tag}>total</div>
                <div className={styles["total-price"]}>
                    {commafy(totalPrice)} VND
                </div>
            </div>

            <form action="#" className={styles.coupon}>
                <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Enter your coupon"
                />
                <button>
                    <FontAwesomeIcon icon={faGift} />
                    Apply coupon
                </button>
            </form>
        </div>
    );
};

export default SummaryBox;

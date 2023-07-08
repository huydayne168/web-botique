import React from "react";
import styles from "./OrderBox.module.css";
import { useSelector } from "react-redux";
import usePrice from "../../hooks/use-price";
const OrderBox = () => {
    const cart = useSelector((state) => state.cart);
    const commafy = usePrice();
    const totalPrice = cart.reduce(
        (init, cartItem) => init + cartItem.price,
        0
    );
    return (
        <div className={styles["order-box"]}>
            <div className={styles.heading}>Your order</div>
            <ul className={styles["order-list"]}>
                {cart.map((cartItem) => {
                    return (
                        <li key={cartItem.item._id.$oid}>
                            <div className={styles.name}>
                                {cartItem.item.name}
                            </div>
                            <div className={styles.price}>
                                {commafy(cartItem.item.price)} VND X{" "}
                                {cartItem.amount}
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className={styles.total}>
                <div className={styles["total-tag"]}>total</div>
                <div className={styles["total-price"]}>
                    {commafy(totalPrice)} VND
                </div>
            </div>
        </div>
    );
};

export default OrderBox;

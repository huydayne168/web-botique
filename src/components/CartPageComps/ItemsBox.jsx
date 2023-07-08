import React, { useEffect } from "react";
import styles from "./ItemsBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import usePrice from "../../hooks/use-price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
const ItemsBox = () => {
    const cart = useSelector((state) => state.cart);
    const commafy = usePrice();
    const dispatch = useDispatch();

    // function to decrease amount 1 less(use cartItem as parameter to check the amount always more than 0)
    function downAmount(cartItem) {
        if (cartItem.amount > 1) {
            dispatch(
                cartActions.addToCart({
                    item: cartItem.item,
                    amount: -1,
                    price: -cartItem.item.price,
                })
            );
        } else {
            return;
        }
    }
    // function to increase amount 1 more
    function upAmount(item) {
        dispatch(
            cartActions.addToCart({
                item: item,
                amount: 1,
                price: +item.price,
            })
        );
    }

    // function to delete items:
    function deleteHandler(item) {
        dispatch(cartActions.deleteFromCart(item));
    }

    // store cart to local storage
    useEffect(() => {
        if (localStorage.getItem("curUser")) {
            localStorage.setItem(
                `${localStorage.getItem("curUser")}-cart`,
                JSON.stringify(cart)
            );
        }
        console.log(cart);
    }, [cart]);

    // return jsx component:
    return (
        <div className={styles["items-box"]}>
            <div className={`${styles["tag-name"]} ${styles.row}`}>
                <div>Image</div>
                <div>Product</div>
                <div>price</div>
                <div>quantity</div>
                <div>total</div>
                <div>remove</div>
            </div>

            {cart[0] ? (
                cart.map((cartItem) => {
                    return (
                        <div
                            className={styles.row}
                            key={cartItem.item._id.$oid}
                        >
                            <img
                                src={cartItem.item.img1}
                                alt={cartItem.item.name}
                            />
                            <div className={styles.name}>
                                {cartItem.item.name}
                            </div>
                            <div className={styles.price}>
                                {commafy(cartItem.item.price)} VND
                            </div>

                            <div className={styles.quantity}>
                                <FontAwesomeIcon
                                    icon={faChevronCircleLeft}
                                    onClick={() => {
                                        downAmount(cartItem);
                                    }}
                                />
                                {cartItem.amount}
                                <FontAwesomeIcon
                                    icon={faChevronCircleRight}
                                    onClick={() => {
                                        upAmount(cartItem.item);
                                    }}
                                />
                            </div>

                            <div className={styles.price}>
                                {commafy(cartItem.price)} VND
                            </div>

                            <div
                                className={styles.remove}
                                onClick={() => {
                                    deleteHandler(cartItem.item);
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    );
                })
            ) : (
                <p style={{ textAlign: "center", fontSize: "24px" }}>
                    NO ITEMS
                </p>
            )}
        </div>
    );
};

export default ItemsBox;

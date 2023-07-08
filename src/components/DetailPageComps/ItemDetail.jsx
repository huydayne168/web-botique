import React, { useEffect, useState } from "react";
import styles from "./ItemDetail.module.css";
import usePrice from "../../hooks/use-price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
const ItemDetail = ({ item }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const commafy = usePrice();

    function upAmount() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    function downAmount() {
        setQuantity((prevQuantity) => {
            if (prevQuantity <= 1) {
                return 1;
            } else {
                return prevQuantity - 1;
            }
        });
    }

    function addToCartHandler(event) {
        event.preventDefault();
        const payload = {
            item: item,
            amount: quantity,
            price: item.price * quantity,
        };
        dispatch(cartActions.addToCart(payload));
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

    return (
        <div className={styles["item-detail"]}>
            <h1 className={styles.name}>{item.name}</h1>
            <div className={styles.price}>{commafy(item.price)} VND</div>
            <p className={styles["desc-para"]}>{item.short_desc}</p>
            <div className={styles.category}>
                <span>category: </span>
                {item.category}
            </div>

            <div className={styles.actions}>
                <form action="#">
                    <input type="text" placeholder="quantity" />
                    <div className={styles.amount}>
                        <FontAwesomeIcon
                            icon={faChevronCircleLeft}
                            onClick={downAmount}
                        />
                        <div>{quantity}</div>
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            onClick={upAmount}
                        />
                    </div>

                    <button onClick={addToCartHandler}>Add to cart</button>
                </form>
            </div>
        </div>
    );
};

export default ItemDetail;

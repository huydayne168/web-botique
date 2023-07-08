import React from "react";
import styles from "./Categories.module.css";
import Product1Img from "../../images/product_1.png";
import Product2Img from "../../images/product_2.png";
import Product3Img from "../../images/product_3.png";
import Product4Img from "../../images/product_4.png";
import Product5Img from "../../images/product_5.png";
import { useNavigate } from "react-router-dom";
const Categories = () => {
    const navigate = useNavigate();
    function toShopPage() {
        navigate("shop");
    }
    return (
        <div className={styles.categories}>
            <div className={styles.heading}>
                <p>carefully created collections</p>
                <h2>browse our categories</h2>
            </div>

            <div className={styles["categories-wrapper"]}>
                <div
                    className={styles["categories-items"]}
                    onClick={toShopPage}
                >
                    <img src={Product1Img} alt="product1" />
                </div>

                <div
                    className={styles["categories-items"]}
                    onClick={toShopPage}
                >
                    <img src={Product2Img} alt="product2" />
                </div>

                <div
                    className={styles["categories-items"]}
                    onClick={toShopPage}
                >
                    <img src={Product3Img} alt="product3" />
                </div>

                <div
                    className={styles["categories-items"]}
                    onClick={toShopPage}
                >
                    <img src={Product4Img} alt="product4" />
                </div>

                <div
                    className={styles["categories-items"]}
                    onClick={toShopPage}
                >
                    <img src={Product5Img} alt="product5" />
                </div>
            </div>
        </div>
    );
};

export default Categories;

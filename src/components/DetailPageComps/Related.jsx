import React from "react";
import styles from "./Related.module.css";
import { useNavigate } from "react-router-dom";
import usePrice from "../../hooks/use-price";
const Related = ({ items }) => {
    console.log(items);
    const navigate = useNavigate();
    const commafy = usePrice();
    return (
        <div className={styles.related}>
            <h2>Related Products</h2>
            <div className={styles["related-items__wrapper"]}>
                {items.map((item, index) => {
                    return (
                        <div
                            key={item._id.$oid}
                            className={styles["products-items"]}
                            onClick={() => {
                                navigate("/detail/" + item._id.$oid);
                            }}
                        >
                            <img src={item.img1} alt={`product ${index}`} />
                            <div className={styles["products-items__desc"]}>
                                <h4 className={styles.name}>{item.name}</h4>
                                <div className={styles.price}>
                                    {commafy(item.price.toString())} VND
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Related;

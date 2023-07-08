import React from "react";
import styles from "./ItemsList.module.css";
import { useNavigate } from "react-router-dom";
import usePrice from "../../hooks/use-price";
const ItemsList = ({ filterState }) => {
    const navigate = useNavigate();
    const commafy = usePrice();
    return (
        <div className={styles["items-list"]}>
            <div className={styles["items-list__header"]}>
                <input type="text" placeholder="Enter Search Here!" />

                <select name="sort" id="sorting-select">
                    <option value="default">Default Sorting</option>
                </select>
            </div>

            <div className={styles["items-list__body"]}>
                {filterState.map((item, index) => {
                    return (
                        <div
                            key={item._id.$oid}
                            className={styles.items}
                            onClick={() => {
                                navigate("/detail/" + item._id.$oid);
                            }}
                        >
                            <div className={styles["items-img"]}>
                                <img
                                    src={item.img1}
                                    alt={`image of product ${index}`}
                                />
                            </div>
                            <div className={styles["items-desc"]}>
                                <h3 className={styles.name}>{item.name}</h3>
                                <div className={styles.price}>
                                    {commafy(item.price)} VND
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ItemsList;

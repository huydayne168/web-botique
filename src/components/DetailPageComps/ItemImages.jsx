import React from "react";
import styles from "./ItemImages.module.css";
const ItemImages = ({ item }) => {
    return (
        <div className={styles["item-images"]}>
            <ul className={styles["sm-images"]}>
                <li>
                    <img src={item.img1} alt={`image of ${item.name} `} />
                </li>
                <li>
                    <img src={item.img2} alt={`image of ${item.name} `} />
                </li>
                <li>
                    <img src={item.img3} alt={`image of ${item.name} `} />
                </li>
                <li>
                    <img src={item.img4} alt={`image of ${item.name} `} />
                </li>
            </ul>

            <div className={styles["main-image"]}>
                <img src={item.img1} alt={`image of ${item.name} `} />
            </div>
        </div>
    );
};

export default ItemImages;

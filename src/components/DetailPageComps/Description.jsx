import React from "react";
import styles from "./Description.module.css";
const Description = ({ item }) => {
    const features = item.long_desc.split("\n");
    console.log(features);
    return (
        <div className={styles.description}>
            <div className={styles.header}>description</div>
            <h2>product description</h2>
            <div className={styles.features}>
                <h3>Đặc điểm nổi bật:</h3>
                <ul>
                    {features.map((feature, index) => {
                        if (index === 0) {
                            return;
                        } else {
                            return <li key={index + feature}>{feature}</li>;
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Description;

import React from "react";
import styles from "./Banner.module.css";
import BannerImg from "../../images/banner1.jpg";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.banner}>
            <img src={BannerImg} alt="banner" />
            <div className={styles["banner-text"]}>
                <span>New inspiration 2023</span>
                <p>20% off on new season</p>
                <button
                    onClick={() => {
                        navigate("shop");
                    }}
                >
                    Browse collections
                </button>
            </div>
        </div>
    );
};

export default Banner;

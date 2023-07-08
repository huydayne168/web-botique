import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-cols"]}>
                <h3>Customer Services</h3>
                <ul>
                    <li>
                        <a href="#!">Help & Contact Us</a>
                    </li>
                    <li>
                        <a href="#!">Returns & Refunds</a>
                    </li>
                    <li>
                        <a href="#!">Online Stores</a>
                    </li>
                    <li>
                        <a href="#!">Terms & Conditions</a>
                    </li>
                </ul>
            </div>
            <div className={styles["footer-cols"]}>
                <h3>Company</h3>
                <ul>
                    <li>
                        <a href="#!">What We Do</a>
                    </li>
                    <li>
                        <a href="#!">Available Services</a>
                    </li>
                    <li>
                        <a href="#!">Latest Posts</a>
                    </li>
                    <li>
                        <a href="#!">FAQs</a>
                    </li>
                </ul>
            </div>
            <div className={styles["footer-cols"]}>
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <a href="#!">Twitter</a>
                    </li>
                    <li>
                        <a href="#!">Instagram</a>
                    </li>
                    <li>
                        <a href="#!">Facebook</a>
                    </li>
                    <li>
                        <a href="#!">Pinterest</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;

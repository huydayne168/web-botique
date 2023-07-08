import React, { Fragment } from "react";
import styles from "./MoreInfor.module.css";
const MoreInfor = () => {
    return (
        <Fragment>
            <div className={styles.services}>
                <ul>
                    <li>
                        <h3>free shipping</h3>
                        <em>Free shipping worldwide</em>
                    </li>
                    <li>
                        <h3>24 x 7 Service</h3>
                        <em>Free shipping worldwide</em>
                    </li>
                    <li>
                        <h3>festival offer</h3>
                        <em>Free shipping worldwide</em>
                    </li>
                </ul>
            </div>

            <div className={styles.subscribe}>
                <div className={styles.heading}>
                    <h2>let's be friends!</h2>
                    <p>Subscribe us to be friends</p>
                </div>
                <form action="#">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                    />
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                        }}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default MoreInfor;

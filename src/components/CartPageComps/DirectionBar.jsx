import React from "react";
import styles from "./DirectionBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const DirectionBar = () => {
    return (
        <div className={styles["direction-bar"]}>
            <Link to={"/shop"}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Continue shopping
            </Link>
            <Link to={"/checkout"}>
                Proceed to checkout <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
};

export default DirectionBar;

import React, { Fragment } from "react";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faRightFromBracket,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { curUserActions } from "../store";
const MainNavigation = () => {
    const navigate = useNavigate();
    const curUser = useSelector((state) => state.curUser.curUser);
    const dispatch = useDispatch();
    const actions = curUserActions;
    const curUserName = curUser
        ? JSON.parse(localStorage.getItem("users")).filter(
              (user) => user.email === curUser
          )[0]?.fullName
        : null;
    console.log(curUserName, curUser);

    function logOutHandler() {
        dispatch(actions.logout());
        navigate("/");
    }

    function toHomePage() {
        navigate("/");
    }

    function toShopPage() {
        navigate("shop");
    }

    function toCart() {
        navigate("cart");
    }

    function toLogin() {
        navigate("sign-in");
    }

    return (
        <div className={styles.header}>
            <div>
                <div className={styles["nav-items"]} onClick={toHomePage}>
                    Home
                </div>
                <div className={styles["nav-items"]} onClick={toShopPage}>
                    Shop
                </div>
            </div>

            <div className={styles.brand} onClick={toHomePage}>
                Boutique
            </div>
            <div>
                <div className={styles["nav-items"]} onClick={toCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Cart
                </div>
                {curUser ? (
                    <Fragment>
                        <div className={styles["nav-items"]}>
                            {curUserName} <FontAwesomeIcon icon={faCaretDown} />
                        </div>

                        <div
                            className={styles["nav-items"]}
                            onClick={logOutHandler}
                        >
                            Logout
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </div>
                    </Fragment>
                ) : (
                    <div className={styles["nav-items"]} onClick={toLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        Login
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainNavigation;

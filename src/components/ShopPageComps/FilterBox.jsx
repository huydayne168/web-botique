import React, { useEffect } from "react";
import { useReducer } from "react";
import styles from "./FilterBox.module.css";
import { useRouteLoaderData, NavLink, useSearchParams } from "react-router-dom";
const FilterBox = (props) => {
    const data = useRouteLoaderData("root");
    const [searchParams] = useSearchParams();

    // Filter Reducer:
    const IPHONE = "IPHONE";
    const IPAD = "IPAD";
    const MACBOOK = "MACBOOK";
    const AIRPOD = "AIRPOD";
    const WATCH = "WATCH";
    const MOUSE = "MOUSE";
    const KEYBOARD = "KEYBOARD";
    const OTHER = "OTHER";

    function filterReducer(state, action) {
        if (action.type !== "ALL") {
            return data.filter(
                (item) => item.category.toUpperCase() === action.type
            );
        } else {
            return data;
        }
    }

    const [filterState, filterDispatch] = useReducer(filterReducer, data);
    useEffect(() => {
        props.listHandler(filterState);
    }, [filterState]);
    return (
        <div className={styles["categories-filter"]}>
            <h2>categories</h2>
            <div className={styles["categories-filter__box"]}>
                <div
                    className={`${styles.apple} ${styles["categories-tagname"]}`}
                >
                    Apple
                </div>
                <ul>
                    <li
                        className={`${styles["categories-items"]}`}
                        onClick={() => {
                            filterDispatch({ type: "ALL" });
                        }}
                    >
                        <NavLink
                            to={"?category=all"}
                            className={({ isActive }) =>
                                isActive &&
                                searchParams.get("category") === "all"
                                    ? styles.active
                                    : ""
                            }
                        >
                            All
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles["categories-tagname"]}>
                            iphone & mac
                        </div>
                        <ul>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: IPHONE });
                                }}
                            >
                                <NavLink
                                    to={"?category=iphone"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") ===
                                            "iphone"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Iphone
                                </NavLink>
                            </li>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: IPAD });
                                }}
                            >
                                <NavLink
                                    to={"?category=ipad"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") === "ipad"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Ipad
                                </NavLink>
                            </li>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: MACBOOK });
                                }}
                            >
                                <NavLink
                                    to={"?category=macbook"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") ===
                                            "macbook"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Macbook
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles["categories-tagname"]}>
                            wireless
                        </div>
                        <ul>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: AIRPOD });
                                }}
                            >
                                <NavLink
                                    to={"?category=airpod"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") ===
                                            "airpod"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Airpod
                                </NavLink>
                            </li>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: WATCH });
                                }}
                            >
                                <NavLink
                                    to={"?category=watch"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") === "watch"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Watch
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles["categories-tagname"]}>
                            other
                        </div>
                        <ul>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: MOUSE });
                                }}
                            >
                                <NavLink
                                    to={"?category=mouse"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") === "mouse"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Mouse
                                </NavLink>
                            </li>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: KEYBOARD });
                                }}
                            >
                                <NavLink
                                    to={"?category=keyboard"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") ===
                                            "keyboard"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Keyboard
                                </NavLink>
                            </li>
                            <li
                                className={`${styles["categories-items"]} `}
                                onClick={() => {
                                    filterDispatch({ type: OTHER });
                                }}
                            >
                                <NavLink
                                    to={"?category=other"}
                                    className={({ isActive }) =>
                                        isActive &&
                                        searchParams.get("category") === "other"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Other
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterBox;

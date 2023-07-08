import React, { useState } from "react";
import styles from "./MainShopContent.module.css";
import {
    useRouteLoaderData,
    NavLink,
    useSearchParams,
    useNavigate,
} from "react-router-dom";
import FilterBox from "./FilterBox";
import ItemsList from "./ItemsList";
const MainShopContent = () => {
    const [filterState, setFilterState] = useState([]);
    function filterStateHandler(list) {
        setFilterState(list);
    }

    return (
        <div className={styles["main-content"]}>
            <FilterBox listHandler={filterStateHandler} />
            <ItemsList filterState={filterState} />
        </div>
    );
};

export default MainShopContent;

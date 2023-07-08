import React from "react";
import styles from "./MainDetailContent.module.css";
import {
    useParams,
    useRouteLoaderData,
    useSearchParams,
} from "react-router-dom";
import ItemImages from "./ItemImages";
import ItemDetail from "./ItemDetail";
import Description from "./Description";
import Related from "./Related";

const MainDetailContent = () => {
    const data = useRouteLoaderData("root");
    const { productId } = useParams();
    const choseItem = data.filter((item) => item._id.$oid === productId)[0];
    const relatedItems = data.filter(
        (item) =>
            item._id.$oid !== productId && item.category === choseItem.category
    );
    return (
        <div className={styles["main-content"]}>
            <div className={styles["item-detail__wrapper"]}>
                <ItemImages item={choseItem} />
                <ItemDetail item={choseItem} />
            </div>
            <Description item={choseItem} />

            <Related items={relatedItems} />
        </div>
    );
};

export default MainDetailContent;

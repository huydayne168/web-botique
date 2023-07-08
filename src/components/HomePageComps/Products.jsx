import React, { Fragment, useState } from "react";
import styles from "./Products.module.css";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { popupProductsItemsActions } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import usePrice from "../../hooks/use-price";
// import { use } from "react-redux/es/hooks/useSelector";
const Products = () => {
    const productItemsData = useRouteLoaderData("root");
    const navigate = useNavigate();

    // get popup state:
    const popup = useSelector((state) => state.popupProductsItems.isShow);
    const dispatch = useDispatch();

    // popup item chose:
    const [itemChose, setItemChose] = useState(null);

    function showPopupHandler(item) {
        setItemChose(item);
        console.log(itemChose);
        dispatch(popupProductsItemsActions.show());
        console.log(popup);
    }

    function hidePopupHandler() {
        setItemChose(null);
        console.log(itemChose);
        dispatch(popupProductsItemsActions.hide());
        console.log(popup);
    }

    // Function to transform the products items price ex: 1234567=> 1.234.567
    const commafy = usePrice();

    return (
        <div className={styles.products}>
            <div className={styles.heading}>
                <p>Made the hard way</p>
                <h2>top trending products</h2>
            </div>

            <div className={styles["products-wrapper"]}>
                {/* Popup Html here */}
                {popup && itemChose ? (
                    <div className={styles.backdrop} onClick={hidePopupHandler}>
                        <div
                            className={styles.popup}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        >
                            <div className={styles["popup-img"]}>
                                <img
                                    src={itemChose.img1}
                                    alt={`product ${itemChose.name}`}
                                />
                            </div>

                            <div className={styles["popup-desc"]}>
                                <h4 className={styles.name}>
                                    {itemChose.name}
                                </h4>
                                <div className={styles.price}>
                                    {commafy(itemChose.price.toString())} VND
                                </div>
                                <p>{itemChose.short_desc}</p>
                                <button
                                    onClick={() => {
                                        navigate(
                                            "/detail/" + itemChose._id.$oid
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} />{" "}
                                    View Detail
                                </button>
                            </div>

                            <FontAwesomeIcon
                                icon={faClose}
                                className={styles["popup-close"]}
                                onClick={hidePopupHandler}
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {productItemsData.map((item, index) => {
                    return (
                        <Fragment key={item._id.$oid}>
                            <div
                                className={styles["products-items"]}
                                onClick={() => {
                                    showPopupHandler(item);
                                }}
                            >
                                <img src={item.img1} alt={`product ${index}`} />
                                <div className={styles["products-items__desc"]}>
                                    <h4 className={styles.name}>{item.name}</h4>
                                    <div className={styles.price}>
                                        {commafy(item.price.toString())} VND
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;

import React from "react";
import Banner from "../utils/Banner";
import MainCartContent from "../components/CartPageComps/MainCartContent";

const Cart = () => {
    return (
        <div className="main">
            <Banner text={"Cart"} />
            <MainCartContent />
        </div>
    );
};

export default Cart;

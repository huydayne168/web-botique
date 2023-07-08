import React from "react";
import Banner from "../utils/Banner";
import MainShopContent from "../components/ShopPageComps/MainShopContent";
const ShopPage = () => {
    return (
        <div className="main">
            <Banner text={"Shop"} />
            <MainShopContent />
        </div>
    );
};

export default ShopPage;

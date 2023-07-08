import React from "react";
import Banner from "../utils/Banner";
import MainCheckoutContent from "../components/CheckoutageComps/MainCheckoutContent";
const CheckoutPage = () => {
    return (
        <div className="main">
            <Banner text={"checkout"} />
            <MainCheckoutContent />
        </div>
    );
};

export default CheckoutPage;

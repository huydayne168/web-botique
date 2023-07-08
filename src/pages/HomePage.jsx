import React from "react";
import Banner from "../components/HomePageComps/Banner";
import Categories from "../components/HomePageComps/Categories";
import { json } from "react-router-dom";
import Products from "../components/HomePageComps/Products";
import MoreInfor from "../components/HomePageComps/MoreInfor";

const HomePage = () => {
    return (
        <div className="main">
            <Banner />
            <Categories />
            <Products />
            <MoreInfor />
        </div>
    );
};

export default HomePage;

export async function loader({ requests, params }) {
    const res = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );

    if (!res.ok) {
        throw json({ message: "Something wrong!" }, { status: 500 });
    }

    return res;
}

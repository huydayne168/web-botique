import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Chat from "./Chat";

const RootLayout = () => {
    return (
        <Fragment>
            <Chat />
            <MainNavigation />
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default RootLayout;

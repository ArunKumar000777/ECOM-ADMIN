import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidenav from "./Sidenav";

const Layout = () => {
    return (
        <div className="flex ">
            <div>
                <Sidenav />
            </div>
            <div className="">
                <Header />
                {/* <div> */}
                    <Outlet />
                {/* </div> */}
            </div>
        </div>
    );
};

export default Layout;

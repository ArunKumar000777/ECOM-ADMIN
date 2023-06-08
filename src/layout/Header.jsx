import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import logo from "../assets/logo.png";
import { Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const path = location?.pathname?.split("/")[1];
    const { pathname } = useLocation();
    // console.log(pathname, "paath");
    let heading;
    // console.log(location);
    if (path === "/") {
        heading = "Dashboard";
    } else if (path === "product") {
        heading = "Product";
    }
    // console.log(heading);
    return (
        <div className="sticky top-0 z-10 flex items-center h-24 bg-bg_primary">
            {/* <div className="">
                <h1 className="w-[350px]"></h1>
                <img src={logo} alt="logo" className="w-14" />
            </div> */}
            <div className="grid w-full grid-cols-3 justify-items-center">
                <div className="">
                    <h1 className="self-start text-2xl font-semibold text-black ">{heading}</h1>
                </div>
                <div className="w-[450px] bg-bg_secondary rounded-lg px-4">
                    <SearchOutlinedIcon style={{ color: "gray" }} />
                    <input type="text" className="px-6 py-2 bg-bg_secondary" placeholder="Search.." />
                </div>
                <div className="flex gap-4 justify-self-center">
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneOutlinedIcon style={{ color: "gray" }} />
                    </Badge>
                    <Badge badgeContent={3} color="error">
                        <ShoppingCartOutlinedIcon style={{ color: "gray" }} />
                    </Badge>
                    {pathname === "/" ? (
                        ""
                    ) : (
                        <Link to={`/product/create-product`}>
                            <button className="h-10 px-5 ml-4 text-sm rounded-md bg-orange hover:bg-orange/90 text-bg_secondary ">
                                <AddCircleOutlineOutlinedIcon style={{ color: "whiteSmoke" }} /> {`Create ${path}`}
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import dummyImage from "../assets/dummyLogo.png";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SubMenu from "./SubMenu";
const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const Sidebar_animation = {
        // system view
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            },
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            },
        },
    };
    const subMenusList = [
        {
            name: "build",
            icon: ViewListOutlinedIcon,
            menus: ["auth", "app settings", "stroage", "hosting"],
        },
        {
            name: "analytics",
            icon: ReceiptLongOutlinedIcon,
            menus: ["dashboard", "realtime", "events"],
        },
    ];
    return (
        <motion.div
            variants={Sidebar_animation}
            animate={isOpen ? "open" : "closed"}
            className=" text-gray-600 shadow-xl w-[16rem] max-w-[16rem] h-screen overflow-hidden  sticky top-0 z-50 font-Montserrat"
        >
            {/* Logo */}
            <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
                <img src={dummyImage} alt="logo" width={45} />
                <span className="text-xl whitespace-pre">Firebase</span>
            </div>
            {/* menu */}
            <div className="flex flex-col h-full">
                {/* first */}
                <ul className=" whitespace-pre px-2.5 text-[.9rem] py-5 overflow-x-hidden font-medium flex flex-col gap-1">
                    <li>
                        <NavLink to="/" className="link">
                            <DashboardOutlinedIcon sx={{ fontSize: "23px" }} className="min-w-max" /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className="link">
                            <Inventory2OutlinedIcon sx={{ fontSize: "23px" }} className="min-w-max" /> Products
                        </NavLink>
                    </li>
                    {/* with Submenu */}
                    <div className="py-5 border-y border-slate-300">
                        <small className="inline-block pl-3 mb-2 text-slate-500">Product categories</small>
                        {subMenusList?.map((menu) => {
                            return (
                                <div key={menu?.name} className="flex flex-col gap-1">
                                    <SubMenu data={menu} />
                                </div>
                            );
                        })}
                    </div>
                    {/* <h1>arun</h1> */}
                    <li>
                        <NavLink to="/customer" className="link">
                            <GroupOutlinedIcon sx={{ fontSize: "23px" }} className="min-w-max" /> Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order" className="link">
                            <ViewListOutlinedIcon sx={{ fontSize: "23px" }} className="min-w-max" /> Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/invoice" className="link">
                            <ReceiptLongOutlinedIcon sx={{ fontSize: "23px" }} className="min-w-max" /> Invoices
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* controll button */}
            <motion.div
                animate={isOpen ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: -200, rotate: 180 }}
                transition={{ duration: 0 }}
                onClick={() => setIsOpen(!isOpen)}
                className="absolute z-10 hidden cursor-pointer w-fit h-fit right-2 bottom-6 md:block"
            >
                <ArrowBackIosIcon sx={{ fontSize: "18px" }} />
            </motion.div>
        </motion.div>
    );
};

export default Sidenav;

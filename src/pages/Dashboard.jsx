import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const { pathname } = useLocation();
    const [selectedColor, setSelectedColor] = useState("#000000");

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const headingStyle = {
        color: selectedColor,
        fontSize: "xl",
        fontWeight: "semibold",
    };

    return (
        <div>
            <h1 style={headingStyle}>Dashboard</h1>
            <input type="color" onChange={handleColorChange} value={selectedColor} className="w-5 h-6 rounded-full" />
        </div>
    );
};

export default Dashboard;

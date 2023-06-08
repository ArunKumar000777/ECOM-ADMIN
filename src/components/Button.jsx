import React from "react";
const Button = ({ color, text, icon }) => {
    console.log(icon);
    return (
        <button
            className={`px-5 py-2 text-sm border rounded-md text-${color} hover:bg-${color} hover:text-bg_secondary duration-300`}
        >
          {icon}   {text}
        </button>
    );
};

export default Button;

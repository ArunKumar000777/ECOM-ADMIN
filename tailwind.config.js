/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg_primary: "#f5f4fe",
                bg_secondary: "#ffffff",
                hr_gray: "#bfbfbf",
                red: "red",
                orange: "#ff6e40",
                purple: "#9932e7",
                green: "#05b171",
                black: "#0f0c0c",
            },
            fontFamily: {
                Montserrat: "Montserrat",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};

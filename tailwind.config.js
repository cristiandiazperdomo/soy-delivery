const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        colors: {
            ...colors,
            orange: "#000",
            primary: "#EA712E",
            transparent: "transparent",
            current: "currentColor",
        },
        extend: {},
    },
    plugins: [],
};

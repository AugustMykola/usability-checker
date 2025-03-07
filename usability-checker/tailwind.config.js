/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-animate")
    ],
};

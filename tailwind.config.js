/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                success: {
                    300: "#3CC73C",
                    500: "#36B336",
                },
                danger: {
                    300: "#FA3F38",
                    500: "#EB3B35",
                },
                warning: {
                    300: "#FA9C2D",
                    500: "#F1972C",
                },
                normal: {
                    100: "#FCFDFF",
                    300: "#ECEEF0",
                    500: "#E1E3E5",
                    600: "#BFBFCC",
                    700: "#787880",
                    800: "#4F4F5B",
                    900: "#41414C",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};

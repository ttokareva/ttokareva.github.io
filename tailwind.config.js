module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Path to your React files
    ],
    theme: {
        extend: {
            colors: {
                "gray-950": "#111827", // Darker gray for backgrounds
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Custom font
            },
        },
    },
    plugins: [],
};
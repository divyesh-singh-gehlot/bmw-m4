/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your folder structure
    ],
    theme: {
        extend: {
            fontFamily: {
                antonio: ['Antonio', 'sans-serif'],
                sans: ['DM Sans', 'sans-serif'], // default font
            },
        },
    },
    plugins: [],
}

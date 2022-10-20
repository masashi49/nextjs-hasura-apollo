/** @type {import('tailwindcss').Config} */
module.exports = {
    // どの階層にあるファイルにtailwindを使うか設定
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

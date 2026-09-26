/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lime-green': '#cef565',
                'purple': '#6600CC',
                'bright-purple': '#8000FF',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}

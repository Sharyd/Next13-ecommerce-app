/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primaryWhite: '#FFFFFF',
                primaryRoseGold: '#B76E79',
                secondaryLightPink: '#FFE4E1',
                secondaryDarkRed: '#8B0000',
                tertiaryLightPurple: '#e6e6fa',
                tertiaryYellow: '#fed7aa',
            },
        },
    },
    plugins: [],
}

const tailwindcss = require("tailwindcss");
const plugin = require("tailwindcss/plugin");

module.exports = { 
    prefix: '',
    purge: {
        content: {
            //TODO:-> Change for production only
            // enabled: process.env.NODE_ENV === 'production',
            enabled: true,
            content : [
                './src/**/*.{html,ts}'
            ]
        }
    },
    darkMode: 'class', //or 'media' or 'class'
    theme: {
        extend: {

        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        plugin(function({addBase, theme}) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl')},
                'h2': { fontSize: theme('fontSize.xl') },
                'h3': { fontSize: theme('fontSize.lg') },
            })
        })
    ],
    theme: {
        screens: {
            'md': '960px'
        },
        // extend: {
        //     screens: {
        //         'md-l': '960px'
        //         //med-large => @media (min-width: 960px) {
        //     }
        // }
        // fontFamily: {
        //     display: ['Poppins', 'system-ui', 'sans-serif'],
        //     body: ['Poppins', 'system-ui', 'sans-serif']
        // },
        // colors: {
        //     primary: {
        //         50: '#faf5ff',
        //         100: '#f3e8ff',
        //         200: '#e9d5ff',
        //         300: '#d8b4fe',
        //         400: '#c084fc',
        //         500: '#a855f7',
        //         600: '#9333ea',
        //         700: '#7e22ce',
        //         800: '#6b21a8',
        //         900: '#581c87',
        //     },
        //     secondary: {
        //         50: '#fdf2f8',
        //         100: '#fce7f3',
        //         200: '#fbcfe8',
        //         300: '#f9a8d4',
        //         400: '#f472b6',
        //         500: '#ec4899',
        //         600: '#db2777',
        //         700: '#be185d',
        //         800: '#9d174d',
        //         900: '#831843',
        //     },
        // }
    }
}
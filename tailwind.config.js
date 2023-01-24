const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightgreen: {
                    500: '#afd584',
                    550: '#d3ebce',
                },
                red: {
                    550: '#FF5757',
                    575: '#f5e3e3',
                },
                cream: {
                    500: '#FFE2C0',
                    550: '#fbecdd',
                },
                darkbrown: {
                    500: '#6a4b3d',
                },
                sapin: {
                    500: '#80955c'
                },
                warmpink: {
                    500: '#d584c3',
                },
                black: {
                    550: '#363537',
                },
                yellow: {
                    550: '#fbf3db',
                },
                orange: {
                    550: '#f7E0c9',
                },
                discord: {
                    550: '#dee5ff',
                },
                purple: {
                    550: '#e9ddee',
                },
                gris: {
                    550: '#f1f1ef',
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

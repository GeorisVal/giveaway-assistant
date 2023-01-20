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
                },
                red: {
                    550: '#FF5757',
                },
                cream: {
                    500: '#FFE2C0',
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
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

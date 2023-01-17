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
                    500: '#AFD584',
                },
                red: {
                    550: '#FF5757',
                },
                black: {
                    550: '#363537',
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

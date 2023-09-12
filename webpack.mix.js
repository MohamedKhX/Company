let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
    .sass('src/sass/main.scss', 'css/style.css');


mix.disableSuccessNotifications();
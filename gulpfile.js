const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss','public/assests/css/app.css'
    ).scripts([
        '../vendor/angular/angular.js',
        '../vendor/angular-ui-router/release/angular-ui-router.js',
        '**/*.js'
        ]
        ,'./public/assests/js/app.js')
        .browserSync({
            proxy: 'questionpaper.dev'
        });;
});

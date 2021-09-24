const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/profile.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');


// mix.js('resources/js/post.js', 'public/js')
//     .react()
//     .sass('resources/sass/post.scss', 'public/css');



mix
// .js('resources/js/app.js', 'public/js')
// .js('resources/admin/js/app.js', 'public/js/admin')
// // .js('resources/admin/js/validate.post.js', 'public/js/admin')
// // .js('resources/admin/js/validate.product.js', 'public/js/admin')
// // .js('resources/admin/js/validate.category.js', 'public/js/admin')
// // .js('resources/admin/js/validate.tag.js', 'public/js/admin')
// // .js('resources/admin/js/validate.slider.js', 'public/js/admin')
// // .js('resources/admin/js/validate.topic.js', 'public/js/admin')
// // .js('resources/admin/js/validate.ptag.js', 'public/js/admin')
// // .js('resources/js/contact.js', 'public/js')
// .js('resources/js/product.detail.js', 'public/js')
// // .js('resources/js/validate.contact.js', 'public/js')
// // .sass('resources/sass/app.scss', 'public/css')
// .sass('resources/sass/page/home.scss', 'public/css')
.sass('resources/sass/page/login.scss', 'public/css')
// .sass('resources/sass/page/product.detail.scss', 'public/css')
// // .sass('resources/sass/page/contact.scss', 'public/css')
// .sass('resources/admin/sass/page/admin.scss', 'public/css')



mix
.browserSync({
    proxy:'http://estate.com',
    notify: false
})
.disableNotifications();
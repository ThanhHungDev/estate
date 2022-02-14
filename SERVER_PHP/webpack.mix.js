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




mix
// .sass('resources/sass/bootstrap/bootstrap.home.scss', 'public/css/library/')
// .sass('resources/sass/bootstrap/bootstrap.post.scss', 'public/css/library/')
// .sass('resources/sass/bootstrap/bootstrap.chat.scss', 'public/css/library/')
// .sass('resources/sass/bootstrap/bootstrap.product.scss', 'public/css/library/')













    .js('resources/js/post.js', 'public/js').react()
    // .js('resources/js/chat.js', 'public/js').react()
    .js('resources/js/account.js', 'public/js').react()
    // .js('resources/js/comment.js', 'public/js').react()
    // .js('resources/js/validate.login.user.js', 'public/js')
    // .js('resources/js/validate.register.user.js', 'public/js')
    // .js('resources/js/validate.update.user.js', 'public/js')
    // .js('resources/js/app.js', 'public/js')
    // .js('resources/js/login.fb.js', 'public/js')
    // .js('resources/admin/js/app.js', 'public/js/admin')
    // .js('resources/admin/js/validate.post.js', 'public/js/admin')
    // .js('resources/admin/js/validate.product.js', 'public/js/admin')
    // .js('resources/admin/js/validate.category.js', 'public/js/admin')
    // .js('resources/admin/js/validate.tag.js', 'public/js/admin')
    // .js('resources/admin/js/validate.slider.js', 'public/js/admin')
    // .js('resources/admin/js/validate.topic.js', 'public/js/admin')
    // .js('resources/admin/js/validate.ptag.js', 'public/js/admin')
    // .js('resources/js/contact.js', 'public/js')
    // .js('resources/js/product.detail.js', 'public/js')
    // .js('resources/js/validate.contact.js', 'public/js')

    /// react trong phần tạp step by step 
    .sass('resources/sass/page/user.post.scss', 'public/css') /// --------------> react create post
    // .sass('resources/sass/page/user.chat.scss', 'public/css') /// --------------> react create chat




    // .sass('resources/sass/app.scss', 'public/css')
    // .sass('resources/sass/page/home.scss', 'public/css')
    // .sass('resources/sass/page/category.scss', 'public/css')
    // .sass('resources/sass/page/profile.scss', 'public/css')
    // .sass('resources/sass/page/login.scss', 'public/css')
    // .sass('resources/sass/page/register.scss', 'public/css')
    // .sass('resources/sass/page/forgot.scss', 'public/css')
    // .sass('resources/sass/page/contact.scss', 'public/css')
    // .sass('resources/sass/page/product.detail.scss', 'public/css')
    // .sass('resources/sass/page/contact.scss', 'public/css')
    // .sass('resources/admin/sass/page/admin.scss', 'public/css')



mix
    .browserSync({
        proxy: 'https://localhost',
        notify: false
    })
    .disableNotifications()
    .webpackConfig({
        devServer: {
          server: 'https',
        },
    })
    .sourceMaps()
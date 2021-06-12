var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-minify'),
    minifyCss    = require('gulp-clean-css'),
    path         = require('path'),
    sourcemaps   = require('gulp-sourcemaps'),
    rename       = require("gulp-rename"),
    cache        = require('gulp-cached'),
    livereload   = require('gulp-livereload')



gulp.task('sass', function(){
   // sass directory
   return gulp.src('./SCSS/*.scss')
      .pipe(sass())

      /**
       * khúc này là comment cho đỡ nặng tiến trình xử lý
       */
      //outputstyle (nested, compact, expanded, compressed)
      // .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
      // // sourcemaps
      // .pipe(sourcemaps.init())
      // // sourcemaps output directory
      // .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/maps')))
      /** end code */

      // .pipe(minifyCss({ compatibility: 'ie8', keepSpecialComments : 0 }))
      .pipe(minifyCss())
      // autoprefixer
      .pipe(autoprefixer({
         browsers: ['last 15 versions'],
         cascade: false
      }))
      // minify output directory
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/css')))
      // browser sync
      .pipe(livereload())
   }
)


gulp.task('js-client', function(){
   return gulp.src("./JAVASCRIPT/client/*.js")
   .pipe(cache('linting'))
   .pipe(minify({
      ext: {
         min: '.min.js'
      },
      noSource: true
   }))
   // .pipe(rename({ suffix: '.min' }))
   .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/js/client/')))
   .pipe(livereload())
}
)

gulp.task('js-admin', function(){
      return gulp.src("./JAVASCRIPT/admin/*.js")
      .pipe(cache('linting'))
      .pipe(minify({
         ext: {
            min: '.min.js'
         },
         noSource: true
      }))
      // .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/js/admin/')))
      .pipe(livereload())
   }
)



// gulp default (sass, minify-css, browser-sync) method
gulp.task('default', ()=> {
   livereload.listen()
   gulp.watch( './SCSS/*.scss', gulp.series('sass'))
   gulp.watch( './JAVASCRIPT/client/*.js', gulp.series('js-client'))
   gulp.watch( './JAVASCRIPT/admin/*.js', gulp.series('js-admin'))
});



// const resources = {
//    'sass'    : 'SCSS/client.scss',
//    'app'     : 'SCSS/app.scss',
//    'library' : 'SCSS/library.scss',
//    'animate' : 'SCSS/animate.scss',
//    'awesome' : 'SCSS/awesome.scss',
//    'material': 'SCSS/material.scss',
//    'admin'   : 'SCSS/admin.scss',
//    'jsClient': "JAVASCRIPT/client/*.js",
//    'jsAdmin' : "JAVASCRIPT/admin/*.js"
// }

// function runScss(name){
//    return gulp.src(resources[name])
//       .pipe(sass())
//       .pipe(minifyCss({ compatibility: 'ie8', keepSpecialComments : 0 }))
//       .pipe(rename({ suffix: '.min' }))
//       .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/css/')))
//       .pipe(livereload())
// }
// function runJavascript(name){
//    var subfolder = 'client'
//    if( name == 'jsAdmin'){
//       subfolder = 'admin'
//    }
//    return gulp.src([ resources[name] ])
//       .pipe(cache('linting'))
//       .pipe(minify({
//          ext: {
//             min: '.min.js'
//          },
//          noSource: true
//       }))
//       // .pipe(rename({ suffix: '.min' }))
//       .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/js/'+ subfolder +'/')))
//       .pipe(livereload())
// }


// gulp.task('sass', () => runScss('sass'));
// gulp.task('app', () => runScss('app'));
// gulp.task('library', () => runScss('library'));
// gulp.task('animate', () => runScss('animate'));
// gulp.task('awesome', () => runScss('awesome'));
// gulp.task('material', () => runScss('material'));
// gulp.task('admin', () => runScss('admin'));

// gulp.task('jsClient', () => runJavascript('jsClient'));
// gulp.task('jsAdmin', () => runJavascript('jsAdmin'));


 
// // Watch Files For Changes
// gulp.task('watch', function () {
//    livereload.listen()
   
//    gulp.watch([
//       'SCSS/_reboot.scss',
//       'SCSS/_alert.scss',
//       'SCSS/_button.scss',
//       'SCSS/_grid.scss',
//       'SCSS/_proress.scss',
//       'SCSS/client.scss',
//       'SCSS/_client/*.scss',
//       'SCSS/_client/*/*.scss',
//    ], gulp.series('sass'))
   
//    gulp.watch([
//       'SCSS/library.scss',
//       'SCSS/_spinner.scss',
//       'SCSS/_gradient.scss',
//       'SCSS/_modal.jquery.scss',
//       'SCSS/select2/*',
//       'SCSS/select2/*.scss'
//    ], gulp.series('library'))
   
//    gulp.watch([
//       'SCSS/animate.scss',
//       'SCSS/_animate/*.scss',
//       'SCSS/_animate/*/*.scss'
//    ], gulp.series('animate'))

//    gulp.watch([
//       'SCSS/awesome.scss',
//       'SCSS/_awesome/*.scss'
//    ], gulp.series('awesome'))

//    gulp.watch([
//       'SCSS/material.scss'
//    ], gulp.series('material'))

//    gulp.watch([
//       'SCSS/admin.scss',
//       'SCSS/_admin/*.scss'
//    ], gulp.series('admin'))

//    gulp.watch([
//       'JAVASCRIPT/client/*.js',
//       'JAVASCRIPT/client/*/*.js'
//    ], gulp.series('jsClient'));

//    gulp.watch([
//       'JAVASCRIPT/admin/*.js',
//       'JAVASCRIPT/admin/*/*.js',
//    ], gulp.series('jsAdmin'));

// })

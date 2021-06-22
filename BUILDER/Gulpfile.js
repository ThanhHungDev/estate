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



let buildSass = src => {
   // sass directory
   return gulp.src(src)
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
   .pipe(gulp.dest(path.join(__dirname, '/../LARAVEL/public/css')))
   // browser sync
   .pipe(livereload())
}

let buildJs = src => {

   return gulp.src(src)
   .pipe(cache('linting'))
   .pipe(minify({
      ext: {
         min: '.min.js'
      },
      noSource: true
   }))
   // .pipe(rename({ suffix: '.min' }))
   .pipe(gulp.dest(path.join(__dirname, '/../LARAVEL/public/js/')))
   .pipe(livereload())
}


gulp.task('sass-client', function(){
   return buildSass("./SCSS/client.scss")
})
gulp.task('sass-admin', function(){
   return buildSass("./SCSS/admin.scss")
})

gulp.task('sass-library', function(){
   
   return Promise.all([
      buildSass("./SCSS/library.scss"),
      buildSass("./SCSS/animate.scss"),
      buildSass("./SCSS/awesome.scss"),
      buildSass("./SCSS/material.scss")
   ])
})


gulp.task('js-client', function(){
   return buildJs("./JAVASCRIPT/client/*.js")
})
gulp.task('js-admin', function(){
   return buildJs("./JAVASCRIPT/admin/*.js")
})




// gulp default (sass, minify-css, browser-sync) method
gulp.task('default', ()=> {
   livereload.listen()
   gulp.watch( './SCSS/*.scss', gulp.series('sass-client'))
   gulp.watch( './SCSS/*/*.scss', gulp.series('sass-client'))
   gulp.watch( './JAVASCRIPT/client/*.js', gulp.series('js-client'))
});

gulp.task('admin', ()=> {
   livereload.listen()
   gulp.watch( './SCSS/*.scss', gulp.series('sass-admin'))
   gulp.watch( './SCSS/*/*.scss', gulp.series('sass-admin'))
   gulp.watch( './JAVASCRIPT/admin/*.js', gulp.series('js-admin'))
});

gulp.task('library', ()=> {
   livereload.listen()
   gulp.watch( './SCSS/*.scss', gulp.series('sass-library'))
   gulp.watch( './SCSS/*/*.scss', gulp.series('sass-library'))
   gulp.watch( './SCSS/*/*/*.scss', gulp.series('sass-library'))
});

let gulp = require('gulp');
let tailwind = require('tailwindcss');
let autoprefixer = require('autoprefixer');
let cleancss = require('gulp-clean-css');
let postcss = require('gulp-postcss');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let hash = require('gulp-hash');
let references = require('gulp-hash-references');

gulp.task('css', function(){
  var plugins = [
    tailwind(),
    autoprefixer()
  ];
  return gulp.src('./css/main.css')
  .pipe(postcss(plugins))
  .pipe(cleancss())
  .pipe(hash())
  .pipe(gulp.dest('../live/css/'))
  .pipe(hash.manifest('asset-manifest.json', {
    deleteOld: true,
    sourceDir: '../live/css/'
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('js', function(){
  return gulp.src([
    './js/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(hash())
  .pipe(gulp.dest('../live/js/'))
  .pipe(hash.manifest('asset-manifest.json', {
    deleteOld: true,
    sourceDir: '../live/js/'
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('html', function(){
  return gulp.src(['./index.html'])
  .pipe(references('asset-manifest.json'))
  .pipe(gulp.dest('../live/'))
});

gulp.task('default', function(){
  // $ ./node_modules/.bin/gulp
  gulp.watch(['css/**/*.css', './tailwind.config.js', 'index.html'], gulp.series('css'));
  gulp.watch(['js/**/*.js'], gulp.series('js', 'css'));
  gulp.watch(['index.html', 'asset-manifest.json'], gulp.series('html'));
});
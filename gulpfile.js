let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let postcss = require('gulp-postcss');
let tailwindcss = require('tailwindcss');
let purgecss = require('gulp-purgecss');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let hash = require('gulp-hash');
let references = require('gulp-hash-references');

gulp.task('css', function(){
  return gulp.src('./css/main.css')
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
    ]))
    .pipe(purgecss({
      content: ['./index.html', './js/*.js'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            }
          },
          extensions: ['html', 'js']
        }
      ]
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(hash())
    .pipe(gulp.dest('../live/css/'))
    .pipe(hash.manifest('asset-manifest.json', {
      deleteOld: true,
      sourceDir: '../live/css/'
    }))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function(){
  return gulp.src([
    './js/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(hash())
  .pipe(gulp.dest('../live/js/'))
  .pipe(hash.manifest('asset-manifest.json', {
    deleteOld: true,
    sourceDir: '../live/js/'
  }))
  .pipe(gulp.dest('.'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('html', function(){
  return gulp.src('./index.html')
  .pipe(references('asset-manifest.json'))
  .pipe(gulp.dest('../live/'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', function(){
  // $ ./node_modules/.bin/gulp
  browserSync.init({server: { baseDir: "../live/" }});
  gulp.watch(['css/**/*.css', './tailwind.config.js', 'index.html'], gulp.series('css'));
  gulp.watch('js/**/*.js', gulp.series('js', 'css'));
  gulp.watch(['index.html', 'asset-manifest.json'], gulp.series('html'));
});
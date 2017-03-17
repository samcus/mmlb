const
gulp = require("gulp"),
sass = require("gulp-sass"),
sassGlob = require("gulp-sass-glob"),
watch = require("gulp-watch"),
cssnano = require('gulp-cssnano'),
del = require('del');

function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('default', [
  'scss'
]);

gulp.task('scss',['scss:clean'], function(cb){
  //return watch('src/scss/**/*.scss', { ignoreInitial: false })
    return watch('src/scss/**/*.scss', function () {
        gulp.src('src/scss/**/*.scss')
            .pipe(sassGlob())
            .pipe(sass({}).on('error', sass.logError))
            .pipe(cssnano())
            .pipe(gulp.dest('resources/css'));
    });
});

gulp.task('scss:clean', function (cb) {
    return del(['public/resources/css/*']);
});

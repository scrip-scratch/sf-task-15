const gulp = require('gulp')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')

module.exports = function pug2html(cb){
    return gulp.src('app/pages/*.pug')
        .pipe(pugLinter({ reporter: 'default' }))
        .pipe(pug())
        .pipe(gulp.dest('build'))
};
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const csslint = require('gulp-csslint')
const cleanCSS = require('gulp-clean-css')

module.exports = function styles(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError)) 
        .pipe(csslint())
        .pipe(csslint.formatter())       
        .pipe(shorthand())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'))
}

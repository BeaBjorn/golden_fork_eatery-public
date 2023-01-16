

/*
Created by : Beatrice Bjorn
For : Project - Restaurant - webbutveckling III, DT173G
Last updated : 2022-08-21
*/
//Includes the methods used in the gulpfile and the packages installed
const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


//Stores the paths to the different files
const files = {
    htmlPath: "src/**/*.html",
    sassPath: "src/**/*.scss",
    jsPath: "src/**/*.js",
    imagePath: "src/images/*"
}

// A function to copy all the HTML code from the src-folder to the  pub-folder
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub'))
        .pipe(browserSync.stream());
}

//Copies all the images from the src folder to the pub folder and uses image-min to minimize 
//the size on the images where possible
function copyImages() {
    return src(files.imagePath)
        .pipe(imagemin())
        .pipe(dest('pub/images'))
        .pipe(browserSync.stream());
}

//A function to convert scss-files to css and concatinate them into one file in the pup-folder 
//Sourcemaps is used to easily find where errors are located in the src-folder as the errors will not 
//be located in the same place in the files when published
function sassConvert() {
    return src(files.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))//add maps to store errors!!
        .pipe(dest('pub/css'))
        .pipe(browserSync.stream());
}

//A function to concatinate all JavaScript files into one file in the pub-folder
//A package called uglify is used to make it harder to read and copy the JavaScript code once published
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('pub/js'))
        .pipe(browserSync.stream());
}

//A function that looks for changes in the document and updates the pub-folder everytime the documents are saved
function watchTask() {
    browserSync.init({
        server: "./pub"
    });
    watch([files.htmlPath, files.jsPath, files.sassPath, files.imagePath], parallel(copyHTML, jsTask, sassConvert, copyImages));
}

//Exports the tasks from the gulpfile
exports.default = series(
    parallel(copyHTML, jsTask, sassConvert, copyImages),
    watchTask
);
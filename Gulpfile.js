'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sassPath = './source/{,*/}*.{scss,sass}';

// Gulp Sass Task
gulp.task('build:css', function() {
  gulp.src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded' //alt options: nested, compact, compressed
    }))
    .pipe(autoprefixer({
      browsers: ['last 4 versions', 'ie > 8'],
        cascade: false,
        remove: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./target'));
});

gulp.task('sass:watch', function() {
  gulp.watch(sassPath, ['build:css'])
});

gulp.task('default', ['build:css']);

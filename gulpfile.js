'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var lint = require('gulp-jslint');

gulp.task('default', function () {
    return gulp.src('test.js')
        .pipe(jasmine({
            includeStackTrace: true,
            verbose: true
        }));
});

gulp.task('lint', function () {
    gulp.src('index.js')
        .pipe(lint({
            node: true
        }));

    gulp.src('test.js')
        .pipe(lint({
            node: true,
            predef: [
                'jasmine',
                'describe',
                'xdescribe',
                'beforeEach',
                'afterEach',
                'expect',
                'it',
                'xit'
            ]
        }));

    gulp.src('gulpfile.js')
        .pipe(lint({
            node: true
        }));
});
"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 
var open = require('gulp-open'); 
var sass = require('gulp-sass');

var config = {
	port: 9018,
	devBaseUrl: 'http://localhost',
	path: {
		html: './src/*.html',
		sass: './src/sass/*.scss',
		src: './src',
		dist: './dist'
	}
};

gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ 
			app: 'Google Chrome',
			uri: config.devBaseUrl + ':' + config.port + '/' 
		}));
});

gulp.task('html', function() {
	gulp.src(config.path.html)
		.pipe(gulp.dest(config.path.dist))
		.pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src(config.path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.path.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.path.src + '/**/*.scss', ['sass']);
	gulp.watch(config.path.src + '/**/*.html', ['html']);
});

gulp.task('default', ['sass', 'sass', 'open', 'watch']);


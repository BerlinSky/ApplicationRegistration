"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 
var open = require('gulp-open'); 
var sass = require('gulp-sass');
var eslint = require('gulp-eslint'); 

var config = {
	port: 9018,
	devBaseUrl: 'http://localhost',
	path: {
		html: './src/*.html',
		sass: './src/sass/*.scss',
		js: './src/js/**/*.js',
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

gulp.task('js', function () {
  gulp.src(config.path.js)
  	.on('error', console.error.bind(console))
    .pipe(gulp.dest(config.path.dist + '/js'))
		.pipe(connect.reload());
});

gulp.task('eslint', function() {
	return gulp.src(config.path.js)
	  .pipe(eslint({config: 'eslint.config.json'}))
	  .pipe(eslint.format())
	  .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
	gulp.watch(config.path.sass, ['sass']);
	gulp.watch(config.path.js, ['js', 'eslint']);
	gulp.watch(config.path.src + '/**/*.html', ['html']);
});

gulp.task('default', ['sass', 'html', 'js', 'eslint', 'open', 'watch']);


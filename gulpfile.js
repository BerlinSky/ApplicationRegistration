"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 
var open = require('gulp-open'); 
var sass = require('gulp-sass');
var concat = require('gulp-concat'); 
var eslint = require('gulp-eslint'); 

var config = {
	port: 9018,
	devBaseUrl: 'http://localhost',
	path: {
		html: './src/**/*.html',
		image: './src/images/*.*',
		sass: './src/sass/*.scss',
		css: [
			'bower_components/bootstrap/dist/css/bootstrap.min.css',
			'bower_components/font-awesome/css/font-awesome.min.css',
  		'bower_components/ui-select/dist/select.min.css',
  		'bower_components/ng-tags-input/ng-tags-input.min.css',
  		'bower_components/toastr/toastr.min.css'
  	],
  	font: [
  		'bower_components/font-awesome/fonts/*.*',
  	],
  	jslib: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/d3/d3.min.js',
			'bower_components/jquery.easing/jquery.easing.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-sanitize/angular-sanitize.min.js',
			'bower_components/angular-messages/angular-messages.min.js',
			'bower_components/ui-select/dist/select.min.js',
			'bower_components/ng-tags-input/ng-tags-input.min.js',
			'bower_components/toastr/toastr.min.js'
  	],
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

gulp.task('image', function() {
	gulp.src(config.path.image)
		.pipe(gulp.dest(config.path.dist + '/images'))
		.pipe(connect.reload());	
});

gulp.task('font', function() {
	gulp.src(config.path.font)
		.pipe(gulp.dest(config.path.dist + '/fonts'));
});

gulp.task('css', ['font'], function() {
	gulp.src(config.path.css)
	//	.pipe(concat('lib.css'))
		.pipe(gulp.dest(config.path.dist + '/css'));
});

gulp.task('sass', function () {
  gulp.src(config.path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.path.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('jslib', function() {
	gulp.src(config.path.jslib)
		.pipe(gulp.dest(config.path.dist + '/js'));
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

gulp.task('default', ['image', 'css', 'sass', 'html', 'jslib', 'js', 'open', 'watch']);


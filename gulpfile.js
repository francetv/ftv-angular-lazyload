var path = require('path');
var gutil = require('gulp-util');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');
var sequence = require('run-sequence');
var del = require('del');
var karma = new require('karma').Server;
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var template = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');

var buildDir = 'dist';

var js = {
    dest: buildDir + '/js',
    libs: {
        name: "libs.js",
        files: [
            "bower_components/lazyload/build/lazyload.min.js",
            "bower_components/angular/angular.min.js"
        ]
    },
    component: {
        name: "ftv.components.lazyload.js",
        files: [
            "component.js"
        ]
    }
};

var templates = {
    dest: buildDir + '/templates',
    'dest-demo': 'demo/templates',
    component: {
        name: 'ftv.components.lazyload.js',
        files: 'templates/*.html'
    }
};

var demo = {
    dest: 'demo',
    templates: {
        dest: 'templates',
        name: 'template.js',
        files: 'demo/svg/*.svg.html'
    },
    index: {
        name: 'index.js',
        files: [
            'demo/app.js',
            'demo/templates/*.js'
        ]
    }
}

// Build JS //

gulp.task('demo-templates', function () {
    return gulp.src(demo.templates.files)
        .pipe(template(demo.templates.name, { module:'demo.lazyload.templates', standalone:true }))
        .pipe(gulp.dest(demo.dest + '/' + demo.templates.dest));
});

gulp.task('build-templates', ['demo-templates']);


gulp.task('js-demo', function() {
    return gulp.src(demo.index.files)
        .pipe(concat(demo.index.name))
        .pipe(gulp.dest(demo.dest));
});

gulp.task('js-libs', function() {
    return gulp.src(js.libs.files)
        .pipe(concat(js.libs.name))
        .pipe(gulp.dest(js.dest));
});

gulp.task('js-component', function() {
    var files = js.component.files;
    files.push(templates.dest + '/' + templates.component.name);

    return gulp.src(files)
        .pipe(concat(js.component.name))
        .pipe(gulp.dest(js.dest));
});

gulp.task('build-js', ['js-component', 'js-libs', 'js-demo']);

// Minify JS
gulp.task('js-libs-min', function() {
    return gulp.src(js.dest + '/' + js.libs.name)
        .pipe(uglify())
        .pipe(gulp.dest(js.dest));
});

gulp.task('js-component-min', function() {
    return gulp.src(js.dest + '/' + js.component.name)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(js.dest));
});

gulp.task('build-js-min', ['js-component-min', 'js-libs-min']);

// Bower //
gulp.task('bower', function() {
    return bower({ cwd: './' });
});

// Karma //
gulp.task('karma-test', function (callback) {
    karma.start({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, callback);
});

// Lint //
gulp.task('js-lint', function() {
    return gulp.src([
        js.component.files[0]
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint', ['js-lint']);
// General //
gulp.task('cleanup', function(cb) {
    return del(buildDir, cb);
});

gulp.task('build-dev', function(callback) {
    sequence('cleanup', 'bower', 'build-templates', 'build-js', callback);
});

gulp.task('build', function(callback) {
    sequence('build-dev', 'build-js-min', callback);
});

gulp.task('test', function (callback) {
    sequence('lint', 'build-dev', 'karma-test', callback);
});
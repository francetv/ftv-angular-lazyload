// Karma configuration
// Generated on Fri Feb 20 2015 09:57:05 GMT+0100 (CET)

function getCustomConfig(config) {
  return {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/lazyload/build/lazyload.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',

        'demo/svg/*.html',

        'dist/css/ftv.components.lazyload.css',
        'dist/js/ftv.components.lazyload.js',

        'tests/*Spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    preprocessors: {
        "demo/svg/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
        // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        stripPrefix: "demo/svg/",

        // the name of the Angular module to create
        moduleName: "demo.templates"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'junit'],

    junitReporter: {
        outputFile: 'base/tests/reports/karma.xml',
        suite: ''
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };
};



// Karma configuration
// Generated on Fri Feb 20 2015 09:57:05 GMT+0100 (CET)

module.exports = function(config) {
    var specificConfig = getCustomConfig(config);

    config.set(specificConfig);
};

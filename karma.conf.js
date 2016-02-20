// Karma configuration
// Generated on Wed Feb 17 2016 10:11:41 GMT+0300 (MSK)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './app/purereact',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser

    files: [
      '__tests__/*Spec.{js,jsx}'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.{js,jsx}': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // , 'dots', 'threshold'
    reporters: ['mocha', 'coverage'], //, 'coverage'


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    browserify: {
      transform: [require('browserify-istanbul')({
        instrumenter: require('isparta'),
        ignore: ['**/__tests__/**'],
        includeUntested: true
      }),'babelify'],
      extensions: ['.js', '.jsx'],
      debug: true,
      bundleDelay: 1000
    },

    coverageReporter: {
    //   // configure the reporter to use isparta for JavaScript coverage
    //   // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
    //   instrumenters: { isparta : require('isparta') },
    //   instrumenter: {
    //     '**/*.js': 'isparta',
    // ignore: ['**/__tests__/**']
    //   }
      dir: '__tests__/coverage',
      subdir: '.' //function(browser) {return browser.toLowerCase().split(/[ /-]/)[0]}

    }
  })
}

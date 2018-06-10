// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'main/webapp/bower_components/modernizr/modernizr.js',
            'main/webapp/bower_components/jquery/dist/jquery.js',
            'main/webapp/bower_components/angular/angular.js',
            'main/webapp/bower_components/angular-aria/angular-aria.js',
            'main/webapp/bower_components/angular-animate/angular-animate.js',
            'main/webapp/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'main/webapp/bower_components/angular-cache-buster/angular-cache-buster.js',
            'main/webapp/bower_components/angular-cookies/angular-cookies.js',
            'main/webapp/bower_components/jquery-ui/jquery-ui.js',
            'main/webapp/bower_components/angular-dragdrop/src/angular-dragdrop.js',
            'main/webapp/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
            'main/webapp/bower_components/angular-local-storage/dist/angular-local-storage.js',
            'main/webapp/bower_components/angular-messages/angular-messages.js',
            'main/webapp/bower_components/angular-resource/angular-resource.js',
            'main/webapp/bower_components/angular-recursion/angular-recursion.js',
            'main/webapp/bower_components/angular-sanitize/angular-sanitize.js',
            'main/webapp/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'main/webapp/bower_components/angular-translate/angular-translate.js',
            'main/webapp/bower_components/messageformat/messageformat.js',
            'main/webapp/bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
            'main/webapp/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
            'main/webapp/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'main/webapp/bower_components/angular-ui-router/release/angular-ui-router.js',
            'main/webapp/bower_components/angular-ui-select/dist/select.js',
            'main/webapp/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
            'main/webapp/bower_components/json3/lib/json3.js',
            'main/webapp/bower_components/ng-file-upload/ng-file-upload.js',
            'main/webapp/bower_components/ngDraggable/ngDraggable.js',
            'main/webapp/bower_components/sifter/sifter.js',
            'main/webapp/bower_components/microplugin/src/microplugin.js',
            'main/webapp/bower_components/selectize/dist/js/selectize.js',
            'main/webapp/bower_components/angular-material/angular-material.js',
            'main/webapp/bower_components/cytoscape/dist/cytoscape.js',
            'main/webapp/bower_components/cytoscape-edgehandles/cytoscape-edgehandles.js',
            'main/webapp/bower_components/angular-uuids/angular-uuid.js',
            'main/webapp/bower_components/angular-mocks/angular-mocks.js',
            // endbower

            // app files
            'main/webapp/js/app/app.js',
            'main/webapp/js/app/**/*.js',
            'main/webapp/js/components/**/*.js',

            // tests
            'test/javascript/spec/unit/**/!(karma.conf).js',

            // templates
            '../.tmp/templates/templates.js'
        ],

        // list of files / patterns to exclude
        exclude: [
            'test/javascript/protractor.conf.js'
        ],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        //logLevel: config.LOG_DEBUG,
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Which plugins to enable
        plugins: [
          'karma-phantomjs-launcher',
          'karma-chrome-launcher',
          'karma-jasmine',
          'karma-junit-reporter'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        //singleRun: false
    });
};

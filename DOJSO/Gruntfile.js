module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "src/main/webapp/assets/styles/css/main.css": "src/main/webapp/assets/styles/less/**/*.less" // destination file and source file
                }
            }
        },
        watch: {
            less: {
                files: ['src/main/webapp/assets/styles/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            // sass: {
            //     files: ['src/main/scss/**/*.{scss,sass}'],
            //     tasks: ['sass:server']
            // },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            // ngconstant: {
            //     files: ['Gruntfile.js', 'pom.xml'],
            //     tasks: ['ngconstant:dev']
            // }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/main/webapp/**/*.html',
                        'src/main/webapp/**/*.json',
                        'src/main/webapp/assets/styles/**/*.css',
                        'src/main/webapp/scripts/**/*.{js,html}',
                        'src/main/webapp/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        'tmp/**/*.{css,js}'
                    ]
                }
            },
            options: {
                watchTask: true,
                proxy: 'localhost:8080'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        ngconstant: {
            options: {
                name: 'phoenixApp',
                deps: false,
                wrap: '"use strict";\n// DO NOT EDIT THIS FILE, ' +
                'EDIT THE GRUNT TASK NGCONSTANT SETTINGS INSTEAD ' +
                'WHICH GENERATES THIS FILE\n{%= __ngModule %}'
            },
            dev: {
                options: {
                    dest: 'src/main/webapp/js/app/app.constants.js'
                },
                constants: {
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('watch-less', ['less', 'watch']);
};
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/main/webapp/assets/styles/**/*.{scss,sass}'],
                tasks: ['sass:dist'],
                options: {
                    livereload: true, // TODO make this work
                    outputStyle: 'expanded', // nested (default), expanded, compact, compressed
                    indentedSyntax: true, // default: false
                    indentType: 'space', // default: 'space'
                    indentWidth: 4 // default: 2
                    // linefeed: // default: 'ls'
                    // default:  // default:
                    // default:
                    // default:
                }
            },
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'src/main/webapp/assets/styles/target/style.css': 'src/main/webapp/assets/styles/*.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['sass:dist', 'watch']);
    // grunt.registerTask('default', ['uglify']);
};
'use strict';

module.exports = function(grunt)
{
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['js/src/*.js, js/src/content/*.js'], 
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        concat: {
            options: {
                stripBanners: true,
                separator: ';'
            },
            build: {
                src: [
                    'bower_components/jquery/jquery.js',
                    'js/src/jquery.cycle2.min.js',
                    'js/src/jquery.fancybox.js',
                    'js/src/wt-lightbox.js',
                    'js/src/jquery.cookielaw.js',
                    'js/src/jquery.backgroundSize.js',
                    'js/script.js',
                ],
                dest: 'js/script.min.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/script.min.js',
                dest: 'js/script.min.js'
            }
        },

        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: { 'css/style.css': 'scss/style.scss' }
            }
        },

        watch: {
            scripts: {
                files: ['js/src/*.js', 'js/script.js'],
                tasks: ['buildScripts']
            },
            styles: {
                files: ['scss/*.scss', 'scss/src/*.scss', 'scss/src/content/*.scss'],
                tasks: ['buildStyles']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('font-awesome');

    grunt.registerTask('default', ['buildScripts', 'buildStyles']);
    grunt.registerTask('buildScripts', ['concat', 'uglify']);
    grunt.registerTask('buildStyles', ['sass']);
};


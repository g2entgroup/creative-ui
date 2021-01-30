'use strict';
// wrapper function that exposes the grunt instance
module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // this is not required but it shows the elapsed time at the end of the grunt task. just do it. :)
    require('time-grunt')(grunt);

    // initialize the configuration object
    grunt.initConfig({
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            // task target
            sass: {
                // watch the .scss files in the sass directory and children directories
                files: ['src/assets/scss/*.scss'],
                // this task is run when the watch sees a .scss file changed
                tasks: ['sass']
            }
        },
        // https://github.com/gruntjs/grunt-contrib-sass
        sass: {
            dist: {
                // you can also specify the files dynamically so you don't have to specify every
                // file manually. Also useful to preserve the existing folder structure
                // https://github.com/gruntjs/grunt/wiki/Configuring-tasks#building-the-files-object-dynamically
                files: [{
                    // this is the sass output style
                    expand: true,
                    // now load all .scss files from the compile directory
                    src: ['src/assets/scss/*.sass'],
                    // after compiling the .scss files, places them into the css directory
                    dest: 'css',
                    // give the compiled files the .css file extension
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
        }]
        },
        /*copy: {
            css: {
            cwd: 'src/static/css',
            src: ['*.css'],
            dest: 'public/css',
            expand: true
            }
        } */  
            
    });

    // we register the default task which is run with the command `grunt`
    // by setting default you can have multiple task run as the default grunt command.
    // you can also run 'grunt sass' or 'grunt watch' to access the individual task.
    grunt.registerTask('default', ['sass']);
    

    grunt.loadNpmTasks('grunt-contrib-cssmin')

    // Default task(s).
    grunt.registerTask('default', ['cssmin'])

    // Copy files and folders
    //grunt.loadNpmTasks('grunt-contrib-copy')
    // Default task.
    //grunt.registerTask('default', ['copy'])
};
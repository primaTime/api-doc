var path = require("path");

module.exports = function (grunt) {

//    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
//        'gitbook': {
//            development: {
//                input: "./",
//                github: "primaerp/api-doc"
//            }
//        },
        'gh-pages': {
            options: {
                base: '_book'
            },
            src: ['**']
        },
        'clean': {
            files: '.grunt'
        },
        'watch': {
            coffee: {
                files: ['./**/*.md','!./_book/**'],
                tasks: ['gitbook']
            }
        }
    });

    grunt.registerTask('publish', [
//        'gitbook',
        'gh-pages',
        'clean'
    ]);

    grunt.registerTask('default', 'gitbook');
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
    dist: {
      options: {
        optimizationLevel: 5
      },
      files: [{
         expand: true,
         cwd: 'img',
         src: ['**/*.{png,jpg,gif}'],
         dest: 'dist/'
      }]
      }
    },


    uglify: {
       dist: {
          options: {
             sourceMap: true,
             banner: '/*! Hasan Khalid (@hasankhalid94) | Udacity Nanodegree Project 4 */'
          },
          files: {
             'dest/output.min.js': ['views/js/main.js'],
          }
       }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: 'index.html',
          dest: 'dist/indexMin.html'
        }]
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register the default tasks.
  grunt.registerTask('default', ['htmlmin', 'uglify', 'imagemin']);
};

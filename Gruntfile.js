module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dev: {
        src: ['bower_components/angular/angular.js','bower_components/angular-route/angular-route.js',
        'bower_components/angular-touch/angular-touch.js','bower_components/jquery/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'],
        dest: 'app/lib/js/vendor.js'
      }
    },
    less: {
        dev: {
            files: {
                "app/lib/css/vendor.css": "bower_components/bootstrap/dist/css/bootstrap.min.css"
            }
        }
    },
    copy: {
      dev: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'app/lib/fonts/'}

        ]
      }
    },
    watch: {
      files: [],
      tasks: []
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build-vendor', ['concat:dev', 'less:dev', 'copy:dev']);

  grunt.registerTask('default', []);

};
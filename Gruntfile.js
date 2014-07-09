module.exports = function(grunt) {
  grunt.initConfig({
    env: grunt.file.readJSON('.env'),
    s3: {
      options: {
        key: '<%= env.AWS_ACCESS_KEY_ID %>',
        secret: '<%= env.AWS_SECRET_ACCESS_KEY %>',
        bucket: '<%= env.AWS_BUCKET %>',
        access: 'public-read',
        headers: {
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 630720000).toUTCString()
        },
      },
      dev: {
        upload: [
          {
            src: 'dist/assets/**/*',
            dest: 'facturas-client/assets/',
            rel: 'dist/assets',
            options: { verify: true }
          }
        ]
      }
    },
    redis: {
      options: {
        manifestKey: 'releases',
        manifestSize: 10,
        host: '<%= env.REDISTOGO.host %>',
        port: '<%= env.REDISTOGO.port %>',
        connectionOptions: {
          auth_pass: '<%= env.REDISTOGO.password %>'
        }
      },
      canary: {
        options: {
          prefix: '<%= gitinfo.local.branch.current.shortSHA %>:',
          currentDeployKey: '<%= gitinfo.local.branch.current.shortSHA %>',
        },
        files: {
          src: ["dist/index.html"]
        }
      },
      release: {
        options: {
          prefix: 'release:'
        },
        files: {
          src: ["dist/index.html"]
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-redis');
  grunt.registerTask('release', ['gitinfo', 'redis:release']);
  grunt.registerTask('canary', ['gitinfo', 'redis:canary']);
  grunt.registerTask('publish-release', ['default', 'release']);
  return grunt.registerTask('default', ['gitinfo', 's3:dev', 'canary']);
};

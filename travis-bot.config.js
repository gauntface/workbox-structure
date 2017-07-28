const travisbot = require('travis-bot');

module.exports = {
  plugins: [
    new travisbot.plugins.Size({
      globPattern: 'packages/workbox-*/**/*.js',
      globOptions: {
        ignore: [
          '**/node_modules/**/*',
          '**/rollup.config.js',
        ]
      },
      limits: {
        // Max file size of 10 MB
        maxFileSize: 10000000
      }
    }),
  ],
};

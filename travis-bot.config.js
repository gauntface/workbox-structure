const travisbot = require('travis-bot');

module.exports = {
  repoDetails: {
    owner: 'gauntface',
    repo: 'workbox-structure',
  },
  plugins: [
    new travisbot.plugins.Size({
      globPattern: 'packages/workbox-*/**/*.js',
      globOptions: {
        ignore: [
          '**/node_modules/**/*',
          '**/rollup.config.js',
        ]
      },
    }),
  ],
};

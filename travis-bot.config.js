const travisbot = require('travis-bot');

module.exports = {
  botUsername: 'travis-bot-gauntface',
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

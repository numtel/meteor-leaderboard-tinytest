// Do not parse this file if loading the app!
if(typeof Meteor !== 'undefined') return;

Package.describe({
  name: 'leader-tt',
  summary: 'Leaderboard example using tinytest natively',
  version: '1.0.0',
  git: 'https://github.com/numtel/meteor-leaderboard-tinytest.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use([
    'mongo',
    'templating',
    'insecure',
    'autopublish'
  ]);
  api.addFiles([
    'leaderboard.html',
    // 'leaderboard.css', // Not required for test
    'leaderboard.js'
  ]);
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'leader-tt',
    'jquery'
  ]);
  // Place test files in tests/ directory to exclude them from Meteor app
  api.addFiles('tests/leaderboard.js', 'client');
});

var ghpages = require('gh-pages');

ghpages.publish('dist/Lacka90-cv-app', { branch: 'master' }, function(err) {
  console.log(err);
});

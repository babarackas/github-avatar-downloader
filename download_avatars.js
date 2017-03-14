var request = require('request');
var GITHUB_USER = 'babarackas';
var GITHUB_TOKEN = 'b8466eba95146abad5189381d14bc7fefc12ed15';
var repoOwner = 'jquery';
var repoName = 'jquery';

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log(requestURL);

console.log('Welcome to the GitHub Avatar Downloader!');

//getRepoContributors("jquery", "jquery", function(err, result) {
  //console.log("Errors:", err);
  //console.log("Result:", result);
//});


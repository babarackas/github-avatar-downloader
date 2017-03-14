var request = require('request');
var GITHUB_USER = 'babarackas';
var GITHUB_TOKEN = 'b8466eba95146abad5189381d14bc7fefc12ed15';
var repoOwner = 'jquery';
var repoName = 'jquery';
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

var options =
  {
    url: requestURL,
    headers: {
    'User-Agent' : 'GitHub Avatar Downloader - Student Project'
    }
  };


function getRepoContributors(repoOwner, repoName, cb) {
  request.get(options, function (error, response, body) {
    // if (error) {
    //   console.log("Error", err);
    //   return false;
    // }
    // if (response && response.statusCode !== 200) {
    //   console.log("Response was not 200!", response);
    //   return false;
    // }

    var data = JSON.parse(body);

    //data = data[0].avatar_url;
    for (var key in data){
      console.log(data[key].avatar_url);
      };


  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('data', data);
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

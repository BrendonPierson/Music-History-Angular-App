app.factory("get-track",
  ["$q",
  "$http",
  function($q, $http) {

  

  function getTrack() {
    var trackName = $("#userSearchInput").val().replace(/ /g, "+");
    // Return a promise for our async XHR
    return $q(function(resolve, reject) {
      console.log("trackName: ", trackName);
      // Perform some asynchronous operation, resolve or reject 
      // the promise when appropriate.
      $http.get('https://itunes.apple.com/search?media=music&entity=musicTrack&attribute=songTerm&term=white+unicorn')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        },function(error) {
          reject(error);
        }
      );

    });
  }

  return getTrack();






  // var bucket = {};

  // return {
  //   addJunk: function(key, value) {
  //     bucket[key] = value;
  //     return bucket[key];
  //   },
  //   getJunk: function(junk) {
  //     if (bucket.hasOwnProperty(junk)) {
  //       return bucket[junk];
  //     }
  //   }
  // };

}]);

// Artist url
// "https://itunes.apple.com/search?media=music&entity=musicArtist&term=jack+johnson"
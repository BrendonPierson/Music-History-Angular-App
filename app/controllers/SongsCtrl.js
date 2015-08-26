// This is where all the core logic goes
app.controller("SongsCtrl", function($scope, $q) {

    $scope.songs = [];

  // promises to get songs
  function getSongsList(path){
    return $q(function(resolve, reject){
      $.ajax({
        url: path
      })
      .done(function(response){
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

  // Get the data from two nested ajax promises
  getSongsList("./data/songs1.json")
  .then(function(songs){
    $scope.songs.push(songs);
    getSongsList("./data/songs2.json")
    .then(function(songs){
      $scope.songs.push(songs);
      $scope.songs = _.flattenDeep($scope.songs);
      console.log("songs", $scope.songs);
    },
    function(error){
      console.log("error", error);
    });
  },
  function(error){
    console.log("error", error);
  });

});



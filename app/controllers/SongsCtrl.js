// This is where all the core logic goes
app.controller("SongsCtrl", 
  ["$scope", 
  "$firebaseArray",
  "$q", 
  "simple-storage", 
  "get-songs",
  "song-storage",
  function($scope, $firebaseArray, $q, simple_storage, get_songs, song_storage) {

  $scope.songs = [];
  $scope.select = '';

  $scope.newSong = '';
  $scope.newSong.newTitle = '';
  $scope.newSong.newArtist = '';
  $scope.newSong.newAlbum = '';
  $scope.newSong.newGenre = '';

  var ref = new Firebase("https://nssapp.firebaseio.com/songs");
  // download the data into a local object
  $scope.songs = $firebaseArray(ref);
 

  // Clear filters function
  $scope.deleteSong = function(song){
    if($scope.songs.indexOf(song) !== -1){
      $scope.songs.$remove(song).then(function(ref){
        console.log("deleted song: ", ref);
      });
    }
  };

  // Reset all of the filters 
  $scope.clearfilters = function(){
    $scope.selectArtist = '';
    $scope.selectAlbum = '';
    $scope.selectGenre = '';
  };

}]);



app.controller("SongFormCtrl", 
  ["$scope",
  "$firebaseArray",
  function($scope, $firebaseArray) {

    $scope.searchTrack = '';
    $scope.newSong = '';
    $scope.newSong.newTitle = '';
    $scope.newSong.newArtist = '';
    $scope.newSong.newAlbum = '';
    $scope.newSong.newGenre = '';

    var ref = new Firebase("https://nssapp.firebaseio.com/songs");
    // download the data into a local object
    $scope.ref = $firebaseArray(ref);

    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addSong = function() {
      console.log("add song clicked");
      var songToAdd = {
        "name": $scope.newSong.newTitle,
        "artist": $scope.newSong.newArtist,
        "album": $scope.newSong.newAlbum,
        "genre": $scope.newSong.newGenre
        // "uid": 
      };
      console.log("song to add", songToAdd);
      $scope.ref.$add(songToAdd);
      $scope.newSong = '';
    };

    
}]);
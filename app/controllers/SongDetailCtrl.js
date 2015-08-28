app.controller("SongDetailCtrl", 
  ['$scope', 
  '$routeParams', 
  '$firebaseArray',
  
  function($scope, $routeParams, $firebaseArray) {
  
  var ref = new Firebase("https://nssapp.firebaseio.com/songs");
  // download the data into a local object
  $scope.songs = $firebaseArray(ref);

  $scope.songs.$loaded()
  .then(function(songs) { // true
   $scope.selectedSong = songs.filter(function(song){
      return parseInt(song.position) === parseInt($scope.songId);
    })[0];   
  });

    $scope.selectedSong = {};
    $scope.songId = $routeParams.position;
    console.log("Scope.songId = ", $scope.songId);


  }]);
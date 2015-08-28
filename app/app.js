var app = angular.module("MusicApp", ['ngRoute', 'angular.filter', "firebase"]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/songs', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongsCtrl'
    }).
    when('/songs/:position', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl'
    }).
    when('/newsong', {
      templateUrl: 'partials/song-form.html',
      controller: 'SongFormCtrl'
    }).
    otherwise({
      redirectTo: '/songs'
    });
}]);
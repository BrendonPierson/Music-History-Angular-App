var app = angular.module("MusicApp", ['ngRoute', 'angular.filter', "firebase"]);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
    }
  });
}]);


app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when("/home", {
      // the rest is the same for ui-router and ngRoute...
      controller: "LoginCtrl",
      templateUrl: "partials/login.html",
      resolve: {
        // controller will not be loaded until $waitForAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
          return Auth.$waitForAuth();
        }]
      }
    }).
    when('/songs', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongsCtrl',
      resolve: {
        // controller will not be loaded until $requireAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $requireAuth returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $stateChangeError (see above)
          return Auth.$requireAuth();
        }]
      }
    }).
    when('/songs/:position', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl',
      resolve: {
        // controller will not be loaded until $requireAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $requireAuth returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $stateChangeError (see above)
          return Auth.$requireAuth();
        }]
      }
    }).
    when('/newsong', {
      templateUrl: 'partials/song-form.html',
      controller: 'SongFormCtrl',
      resolve: {
        // controller will not be loaded until $requireAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $requireAuth returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $stateChangeError (see above)
          return Auth.$requireAuth();
        }]
      }
    }).
    otherwise({
      redirectTo: '/songs'
    });
}]);
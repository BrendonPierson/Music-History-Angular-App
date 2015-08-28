app.controller("LoginCtrl", 
  ["currentAuth", 
  "$scope", 
  "Auth", 
  "$location",
  "store-uid",
  function(currentAuth, $scope, Auth, $location, storeUid) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in

    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      storeUid.setUid(authData.auth.uid);
      console.log(storeUid.getUid());
    });

    $scope.redirect = function(){
      $location.path("#/songs");
    };



    var ref = new Firebase("https://nssapp.firebaseio.com");
    var authData = ref.getAuth();
    console.log("authData: ", authData);
    //if no login, authenticate with Github OAuth
    if(authData === null) {
      ref.authWithOAuthPopup("github", function(error, authData) { //1.firebase sends request for request token to github with client id and secret id
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }

}]);



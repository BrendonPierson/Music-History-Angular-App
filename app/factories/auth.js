app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://nssapp.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);
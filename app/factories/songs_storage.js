app.factory("song-storage", 
  [
  function(){

  var songs = [];

  return {
    setSongs: function(array){
      songs = array;
    },
    addSong: function(value) {
      songs[songs.length] = value;
      console.log("song added", value);
    },
    getAllSongs: function() {
      return songs;
    }
  };

}]);
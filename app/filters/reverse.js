app.filter('reverse',function(){
  return function(input, scope){
    if(input!== null){
      return input.reverse().join('');
    }
  };
});
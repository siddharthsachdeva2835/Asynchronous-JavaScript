
window.onload = function(){
// XMLHttpRequest + promises
  function get(url){
    return new Promise(function(resolve,reject){
      var https = new XMLHttpRequest() ;

      https.onload = function(){
        if(https.status==200){
          resolve(JSON.parse(https.response));
        }else{
          reject(https.statusText) ;
        }
      };
      https.onerror = function(){
        reject(https.statusText) ;
      };

      https.open("GET",url,true) ;
      https.send() ;
    });
  }

  var promise = get("data/tweets.json") ;
  promise.then(function(tweets){
    console.log(tweets);
    return get("data/friends.json") ;
  }).then(function(friends){
    console.log(friends);
    return get("data/videos.json") ;
  }).then(function(videos){
    console.log(videos);
  }).catch(function(error){
    console.log(error);
  });


// jquery + promise

  $.get("data/tweets.json").then(function(tweets){
    console.log(tweets);
    return $.get("data/friends.json") ;
  }).then(function(friends){
    console.log(friends);
    return $.get("data/videos.json") ;
  }).then(function(videos){
    console.log(videos);
  }).catch(function(error){
    console.log(error);
  });

};

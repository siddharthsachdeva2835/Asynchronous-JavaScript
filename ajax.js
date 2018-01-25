window.onload = function(){

  // first request

  var https = new XMLHttpRequest() ;

  https.onreadystatechange = function(){
    if(https.readyState == 4){
      console.log(JSON.parse(https.response));

      //second request

      var https2 = new XMLHttpRequest() ;

      https2.onreadystatechange = function(){
        if(https2.readyState == 4  && https.status == 200){
          console.log(JSON.parse(https2.response));
        }
      };

      https2.open("GET","data/friends.json",true) ;
      https2.send() ;

    }
  };

  https.open("GET","data/tweets.json",true) ;
  https.send() ;
  console.log("hello!!");
};

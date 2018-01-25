window.onload = function(){
//without using callbacks

  // first request
  $.ajax({
    type : "GET",
    url  : "data/tweets.json",
    success : function(data){
      console.log(data);

      //second request
      $.ajax({
        type : "GET",
        url  : "data/friends.json",
        success : function(data){
          console.log(data);

          //third request
          $.ajax({
            type : "GET",
            url  : "data/videos.json",
            success : function(data){
              console.log(data);
            },
            error : function(jqXHR,textStatus,error){
              console.log(error);
            }
          });
        },
        error : function(jqXHR,textStatus,error){
          console.log(error);
        }
      });
    },
    error : function(jqXHR,textStatus,error){
      console.log(error);
    }
  });


//using callbacks

  //function to handle errors
  function handleErrors(jqXHR,textStatus,error){
    console.log(error);
  }

  // first request
  $.ajax({
    type : "GET",
    url  : "data/tweets.json",
    success : cbtweets,
    error : handleErrors
  });

  function cbtweets(data){
    console.log(data);

    //second request
    $.ajax({
      type : "GET",
      url  : "data/friends.json",
      success : cbfriends,
      error : handleErrors
    });
  }

  function cbfriends(data){
    console.log(data);

    //third request
    $.ajax({
      type : "GET",
      url  : "data/videos.json",
      success : cbvideos,
      error : handleErrors
    });
  }

  function cbvideos(data){
    console.log(data);
  }

};

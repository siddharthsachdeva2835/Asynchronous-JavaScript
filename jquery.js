/*jquery method*/
window.onload = function(){
    $.get("data/tweets.json",function(data){
      console.log(data);
    });
    console.log("test");
};

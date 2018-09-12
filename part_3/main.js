$(document).ready(function(){
    console.log('dom loaded');
    $("#btn1").click(function(){
        //alert("hello"); 
        console.log('button clicked');
        $.get("./Tedtalk.json",function(data){
            console.log(data)
            var x = data.tedTalks[0];

            console.log(x);

           alert("success");
            // console.log("data"+ data);
          
                var counter = 0;
      while(counter < data.tedTalks.length){
    
      var result = randomName(data.tedTalks); 
      if (result) {
        counter++;
      }
    
    }

    }); 
 });   
function randomName(newArray){

  var index = Math.round( Math.random() * 10 );

  if (index < newArray.length) {

    var talk = newArray[index];

    console.log(talk);

     var output = '<li>';
      output += '<h2>' + talk.title + '</h2>';
      output += '<h3>' + talk.speaker + '</h3>';
      output += '<p>' + talk.description + '</p>';
      output += '<p align ="right"><iframe width="420" height="345" src="https://www.youtube.com/embed/' + talk.youTubeId + '"></iframe></p>';
      output += '</li>';

    $('ul').append(output);

    
    return true;
  }
  return false;

};
});

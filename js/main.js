
$().ready(function(){
  $("button").click(function(){
    if (localStorage.clickcount) {
      localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
    else{
      localStorage.clickcount=1;
    }
    document.getElementById("result").innerHTML= "<span class='count'>" + localStorage.clickcount + "</span>" ;
    document.getElementById("clear").innerHTML= "Clear Cart" ;
  })
});

$("#clear").click(function(){
  localStorage.clear();
  document.getElementById("clear").innerHTML= "";
  document.getElementById("result").innerHTML="";
});

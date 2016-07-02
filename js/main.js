
$().ready(function(){
  $("button").click(function(){
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
    }
    else{
      sessionStorage.clickcount=1;
    }
    document.getElementById("result").innerHTML="You have " + sessionStorage.clickcount + " items in your cart.";
  })
});

$(".clear").click(function(){
  session.Storage.clear();
  document.getElementById("clear").innerHTML;
});

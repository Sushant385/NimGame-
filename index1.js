var p1 = localStorage.getItem("p1name");
var p2 = localStorage.getItem("p2name");
document.getElementById("name").innerHTML="All the best  " + p1 + "  and  " + p2;
function start() {
  var n = document.getElementById("stones").value;
  document.getElementById("demo").innerHTML = "Total number of BAll left in bag is  : " + n;
  document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp   " + p1 + " will start ..<br>";
}

var res = 0;
    var count = 0;
    var button1 = document.getElementById("countButton1");
    var button2 = document.getElementById("countButton2");
    var button3 = document.getElementById("countButton3");
    button1.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S  "+p2 +"  TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S "+p1+" TURN ..<br>";
      }
      var n1 = document.getElementById("countButton1").value;
      var n = document.getElementById("stones").value;
      res= res +  Number(n1);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;

      if(val <=0){

        document.getElementById("countButton1").disabled = true;
          document.getElementById("countButton2").disabled = true;
          document.getElementById("countButton3").disabled = true;
        if(count%2!=0){
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🎊 " +p1+" Is WINNER !!..🎉🎊";
        }
        else{
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🌹 "+p2+" Is WINNER !!..🎉🌹";
        }
      }
    }

    button2.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S "+p2+" TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S "+p1+" TURN ..<br>";
      }

      var n2 = document.getElementById("countButton2").value;
      var n = document.getElementById("stones").value;
      res= res +  Number(n2);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;
      if(val <=0 ){
        document.getElementById("countButton1").disabled = true;
          document.getElementById("countButton2").disabled = true;
          document.getElementById("countButton3").disabled = true;
        if(count%2!=0){
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🎊 "+p1+" Is WINNER !!..🎉🎊";
        }
        else{
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🌹 "+p2+" Is WINNER !!..🎉🌹";
        }
      }
    }

    button3.onclick = function(){
      count++;
      if(count % 2!==0){
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp  NOW IT'S "+p2+" TURN  ..<br>";
      }
      else {
        document.getElementById("player1").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp IT'S "+p1+" TURN ..<br>";
      }
      var n3 = document.getElementById("countButton3").value;
      var n = document.getElementById("stones").value;
      res= res +  Number(n3);
      val = Number(n) - res;
      document.getElementById("demo").innerHTML = "The no.of balls left in the bag are : " + val  ;
      if(val <=0){
        document.getElementById("countButton1").disabled = true;
          document.getElementById("countButton2").disabled = true;
          document.getElementById("countButton3").disabled = true;
        if(count%2!=0){
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🎊 "+p1+" Is WINNER !!..🎉🎊";
        }
        else{
          document.getElementById("demo").innerHTML = "";
          document.getElementById("player1").innerHTML = "🎉🌹 "+p2+" Is WINNER !!..🎉🌹";
        }
      }
    }

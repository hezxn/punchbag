var health = 100;

function punch() {
  health = health - 10;
  document.getElementById("inner").style.width = health + "%";
  if (health <= 0) {
    document.getElementById("bagimg").src = "bagb.png";
    document.getElementById("punchbutton").style.display = "none";
  }
}

function reset() {
  health = 100;
  document.getElementById("inner").style.width = health + "%";
  document.getElementById("bagimg").src = "bag.png";
  document.getElementById("punchbutton").style.display = "inline";
}

$(document).ready(function () {
  $("#bagimg").hide();
  $("#bagimg").show(1000);
  /*
  var health=100;
  
  $("#punchbutton").click(function(){
      health=health-10;
      calchealth=health+"%";
      $("#inner").css('width',calchealth);
     
      if(health <=0){
          $("bagimg").src="bagb.png");
          $("#punchbutton").hide(1000);
      }
  });


  $("#resetbutton").click(function(){
      health=100;
      calchealth=health+"%";
      $("inner").css('width',calchealth);
      $("#bagimg").attr("src","bag.png");
      $("#punchbutton").show(1000);
  )}
  */
});

// back-end logic:
var createPingPongArray = function(number) {
	var pingPongArray = [];
  for (var i = 1; i <= number; i++) {
  	pingPongArray.push(i);
  }
  return pingPongArray;
};


//front-end logic:
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userNumber").val());
    var result = createPingPongArray(number);


  $("#result").text(result.join(" "));



  });
});

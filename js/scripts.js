//back-end logic:



//front-end logic:
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userNumber").val());
    // var result = pingPong(number)

  $("#result").text(number);

  $("#result").show();

  });
});

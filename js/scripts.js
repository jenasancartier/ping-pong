// back-end logic:
var createPingPongArray = function(number) {
	var pingPongArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      pingPongArray.push("ping-pong");
    } else if (i % 5 === 0) {
      pingPongArray.push("pong");
    } else if (i % 3 === 0) {
      pingPongArray.push("ping");
    } else {
      pingPongArray.push(i);
    }
  }
  return pingPongArray;
};


//front-end logic:
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#userNumber").val());
    var result = createPingPongArray(number);
		// var ul = document.createElement('ul');
		// for(var i = 0; i < result.length; i++) {
		// 	var li = document.createElement('li');
		//   li.innerHTML = result[i];
		//   ul.appendChild(li).text;
		// }
		// document.body.appendChild(ul);


  $("#result").text(result.join(" * "));

  });
});

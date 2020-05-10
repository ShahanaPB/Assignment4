

function printStars() {
  document.getElementById("result").innerHTML = '';
  //var limit = document.getElementById("limit").value;
  for (var i = 5; i >= 1; i--) {
      var result = "";
      for (var j = i; j >= 1; j--) {
          result += "*"
      }
      document.getElementById("result").insertAdjacentHTML('afterend', result+'<br>');
  }
}
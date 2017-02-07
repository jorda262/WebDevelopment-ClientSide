function start() {
  var button = document.getElementById("search");
  button.addEventListener("click", search, false);
}

function search() {
  var search = document.getElementById("last").value;
  var display = document.getElementById("display");
  var studentString = window.localStorage.getItem("studentsList");
  var sList = studentString.split(";");
  var index = -1;

  for (var i = 0; i < sList.length; i++) {
    var tokens = sList[i].split("|");
    if (tokens[1] === search) {
      index = i;
    }
  }

    if (index != -1) {
      var temp = "<p>";
      var tokens = sList[index].split("|");
      for (var i in tokens) {
        temp += tokens[i] + " ";
      }
    } else {
      var temp = "<p>Student not found.</p>";
    }

  display.innerHTML = temp;
}

window.addEventListener("load", start, false);

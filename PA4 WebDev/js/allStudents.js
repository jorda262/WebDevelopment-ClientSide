function display() {
  var studentString = window.localStorage.getItem("studentsList");
  var sList = studentString.split(";");
  var display = document.getElementById("display");

  display.innerHTML = sList;
  var temp = "<table><tr><td>First names</td><td>Last names</td><td>Addresses</td><td>Cities</td><td>States</td><td>Zip Codes</td><td>Emails</td><td>Phone Numbers</td></tr>";
  for (var i in sList) {
    var tokens = sList[i].split("|");
    temp += "<tr><td>" + tokens[0] + "</td><td>" + tokens[1] + "</td><td>" + tokens[2] + "</td><td>" + tokens[3] + "</td><td>" +
                        tokens[4] + "</td><td>" + tokens[5] + "</td><td>" + tokens[6] + "</td><td>" + tokens[7] + "</td></tr>";
  }
  temp += "</table>";
  display.innerHTML = temp;
}

window.addEventListener("load", display, false);

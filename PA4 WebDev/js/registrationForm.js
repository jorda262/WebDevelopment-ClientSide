function start() {
  var button = document.getElementById("add");
  button.addEventListener("click", save, false);
  var button = document.getElementById("clear");
  button.addEventListener("click", clear, false);
}

function save() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  students.push(first + "|" + last + "|" + address + "|" + city +
                  "|" + state + "|" + zip + "|" + email + "|" + phone);

  window.localStorage.setItem("studentsList",students.join(";"));
  document.getElementById("registration").reset();
}

function clear() {
  document.getElementById("registration").reset();
}

window.addEventListener("load", start, false);
var students = [];

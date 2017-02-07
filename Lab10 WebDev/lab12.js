function start() {
  var submitbtn = document.getElementById('submit');
  submitbtn.addEventListener("click", submit, false);
  var clearbtn = document.getElementById('clear');
  clearbtn.addEventListener("click", clear, false) ;
  var tl = document.getElementById('titleInput');
  tl.addEventListener("keydown", validated, false);
  var dl = document.getElementById('descriptionInput');
  dl.addEventListener("keydown", validated, false);
}

function submit() {
  var tv1 = document.getElementById('titleInput').value;
  var dv1 = document.getElementById('descriptionInput').value;
  var lv1 = document.getElementById('iAccept').value;

  if (tv1 == "") {
    document.getElementById('header').style.backgroundColor= '#a50200';
    document.getElementById('header').style.color= "white";
  }
  if (dv1 == "") {
    document.getElementById('description').style.backgroundColor= '#a50200';
    document.getElementById('description').style.color= "white";
  }
  if (index%2 == 0) {
    document.getElementById('accept').style.backgroundColor= '#a50200';
    document.getElementById('accept').style.color= "white";
  }
}

function validated() {
  var tv2 = document.getElementById('titleInput').value;
  var dv2 = document.getElementById('descriptionInput').value;
  var lv2 = document.getElementById('iAccept').value;

  if (tv2 != "") {
    document.getElementById('header').style.backgroundColor= "green";
    document.getElementById('header').style.color= "white";
  } else {
    document.getElementById('header').style.backgroundColor= "white";
    document.getElementById('header').style.color= "black";
  }
  if (dv2 != "") {
    document.getElementById('description').style.backgroundColor= "green";
    document.getElementById('description').style.color= "white";
  } else {
    document.getElementById('description').style.backgroundColor= "white";
    document.getElementById('description').style.color= "black";
  }
}

function clear() {
  document.getElementById("form").reset();
  index = 0;
  if (document.getElementById('accept').style.backgroundColor == "green") {
    document.getElementById('accept').style.backgroundColor= "white";
    document.getElementById('accept').style.color= "black";
  }
  if (document.getElementById('header').style.backgroundColor == "green") {
    document.getElementById('header').style.backgroundColor= "white";
    document.getElementById('header').style.color= "black";
  }
  if (document.getElementById('description').style.backgroundColor == "green") {
    document.getElementById('description').style.backgroundColor= "white";
    document.getElementById('description').style.color= "black";
  }
}

function handleClick(e) {
  if (index%2 == 0) {
    document.getElementById('accept').style.backgroundColor= "green";
    document.getElementById('accept').style.color= "white";
    index += 1;
  } else if (index%2 == 1) {
    document.getElementById('accept').style.backgroundColor= "white";
    document.getElementById('accept').style.color= "black";
    index += 1;
  }
}

var index = 0;

window.addEventListener("load", start, false);

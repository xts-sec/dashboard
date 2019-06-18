//DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");
searchBar = document.getElementById("searchBar");

//Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  //const amPm = hour >= 12 ? 'PM' : 'AM';

  //12hr Format
  //hour = hour % 12 || 12;

  //Output Time
  time.innerHTML =
    addZero(`${hour}`) +
    `<span>:</span>` +
    addZero(`${min}`) +
    `<span>:</span>` +
    addZero(`${sec}`);

  //Calls every second
  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set background and greeting
function setBackgroundAndGreeting() {
  let today = new Date(),
    hour = today.getHours();
  if (hour >= 6 && hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else if (hour >= 18 || hour < 6) {
    //evening
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good Evening";
  }
}

//Get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Set name
function setName(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//googleSearch
function googleSearch(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      var win = window.open(
        "https://www.google.com/search?q=" + searchBar.value,
        "_blank"
      );
      win.focus();
      searchBar.blur();
    }
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
searchBar.addEventListener("keypress", googleSearch);

//Run
setBackgroundAndGreeting();
showTime();
getName();
getFocus();

//--------------------------- Alertbox-----------------------------------//
function openalert() {
  setTimeout(() => {
    document.getElementById("alert-box").style.width = "73%";
    document.getElementById("alert-box").style.border = "2px inset wheat";
    document.getElementById("alert-box").style.transform = "rotateX(360deg)";
    document.getElementById("alert-box").style.padding = "30px";
  }, 2000);
}
function closealert() {
  document.getElementById("alert-box").style.width = "0%";
  document.getElementById("alert-box").style.border = "";
  document.getElementById("alert-box").style.transform = "rotateZ(360deg)";
  document.getElementById("alert-box").style.padding = "0px";
}

//------------------------- Html Page JS -----------------------------------------------//

//Making top btn visible
//Get the button
var mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction(), smediaFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function live() {
  document.querySelector("#live").scrollIntoView();
}

//---------------------------------------------Burger Menu JS------------------------//
var burger = document.querySelector(".burger");
var navbar = document.querySelector(".navbar");
var navlist = document.querySelector(".nav-list");
var is = document.getElementById("ft");
var fe = document.getElementById("fe");
fe.addEventListener("click", () => {
  navbar.classList.toggle("h-nav");
  navlist.classList.toggle("v-class");
  document.getElementById("burg").className = "burg-trans";
  setTimeout(() => {
    document.getElementById("burg").className = "burger";
  }, 300);
});
is.addEventListener("click", () => {
  navbar.classList.toggle("h-nav");
  navlist.classList.toggle("v-class");
  document.getElementById("burg").className = "burg-trans";
  setTimeout(() => {
    document.getElementById("burg").className = "burger";
  }, 300);
});
burger.addEventListener("click", () => {
  navbar.classList.toggle("h-nav");
  navlist.classList.toggle("v-class");
  document.getElementById("burg").className = "burg-trans";
  setTimeout(() => {
    document.getElementById("burg").className = "burger";
  }, 300);
  topFunction();
});

//-----------------------------------------Social Media Handles --------------------------------------------//

var sicon = document.querySelector(".icon-bar");

// window.onscroll = function() {};

function smediaFunction() {
  if (
    document.body.scrollTop > 270 ||
    document.documentElement.scrollTop > 270
  ) {
    sicon.style.display = "none";
    burger.style.visibility = "hidden";
  } else {
    sicon.style.display = "block";
    burger.style.visibility = "visible";
  }
}

//------------------------------------------- Map JS ---------------------------------------------//

//Making the Map with Tiles
const mymap = L.map("mapid", (dragging = true)).setView([0, 0], 2);
const attribution = '&copy;<a href="https://www.maptiler.com/copyright/" target="_blank"> MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const tileUrl ="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=zZVhyIKbqR0aETNKlJQe";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

//Making a marker with a custon icon
var myIcon = L.icon({
  iconUrl: "img/issnew.png",
  iconSize: [70, 44],
  iconAnchor: [60, 50],
  popupAnchor: [-5, -76],
});

const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);

//function for fetching data from API..

var url =  "https://api.wheretheiss.at/v1/satellites/25544"; // API Get URl
var it = 0;

async function getdata() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data); 

  if (it == 0) {
    mymap.setView([data.latitude, data.longitude],3);
    it = it + 1;
  }
  marker.setLatLng([
    data.latitude,
    data.longitude,
  ]);

  document.getElementById("lat").textContent = data.latitude.toFixed(3);
  document.getElementById("lon").textContent = data.longitude.toFixed(3);
  document.getElementById("alt").textContent = data.altitude.toFixed(3);
  document.getElementById("vel").textContent = data.velocity.toFixed(3);
  document.getElementById("unit").textContent = data.units;
}


//function call for fetching data
getdata();
setInterval(getdata, 1700); //calling function within  intervals


var randomnumber1 = Math.floor(Math.random() * 6) +1;

var randomdice = "dice" + randomnumber1 + ".png";

var randomsource = "images/" + randomdice;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomsource);

var randomnumber2 = Math.floor(Math.random() * 6) +1;

var randomsource2 = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource2);

if (randomnumber1>randomnumber2)
{document.querySelector("h1").innerHTML = "Shubham wins ! Party de Shruti 😁";}
else if (randomnumber2>randomnumber1)
{document.querySelector("h1").innerHTML = "Shruti wins ! Party de Shruti 🥳";}
else {
  document.querySelector("h1").innerHTML = " Draw";
}

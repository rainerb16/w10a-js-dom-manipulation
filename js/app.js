// 1 - querySelector()
var headerText = document.querySelector("body h1");
headerText.style.color = "maroon";
headerText.style.textDecoration = "underline";

// 2 - querySelectorAll()
var pTags = document.querySelectorAll("p");
for(var i = 0; i < pTags.length; i++) {
    pTags[i].style.fontWeight = "bold";
    pTags[i].style.color = "green";
}

// 3 - getElementById()
var domManip = document.getElementById("dom-manipulation");
domManip.style.backgroundColor = "yellow";

// 4 - getElementsByClassName()
var containerThree = document.getElementsByClassName("container-three");
for(var i = 0; i < containerThree.length; i++) {
    containerThree[i].innerText += " I'M HAVING A BLAST IN THIS CLASS!";
    containerThree[i].style.color = "blue";
}
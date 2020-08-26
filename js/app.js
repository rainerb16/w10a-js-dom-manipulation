// 1 - querySelector()
var headerText = document.querySelector("body h1");
headerText.style.color = "maroon";
headerText.style.textDecoration = "underline";
headerText.style.textAlign = "center";

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

// 5 - getElementsByTagName
var tagName = document.getElementsByTagName("h3")
for(var i = 0; i < tagName.length; i++) {
    tagName[i].style.border = "5px solid green";
}

// 6 - createElement()
var newElement = document.createElement("h3");
var parentElement = document.getElementById("parent");
parentElement.append(newElement);

// 7 - createTextNode()
var createText = document.createTextNode("DOM DOM DOM DOM");
newElement.append(createText);

// 8 - removeChild()
var remove = document.getElementById("parent");
remove.removeChild(remove.childNodes[1]);

// 9 - classList add(), remove(), toggle()
var addElement = document.getElementById("image");
addElement.classList.add("programming-image");

// BONUS ;)
function secretMessage() {
    var text = document.getElementById("secret-message");
    if(text.innerHTML === "Click HERE for something only programmers understand") {
        text.innerHTML = "Q: What's the object-oriented way to become wealthy?? A: Inheritance";
    } else {
        text.innerHTML = "Click HERE for something only programmers understand"
    }
}

// Another Bonus Image thing
var programImage = document.getElementById("image");
programImage.style.borderRadius = "70%";
programImage.style.border = "5px solid maroon";

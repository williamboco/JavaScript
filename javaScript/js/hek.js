document.getElementById("demo").innerHTML = "Hello World!";

var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there!";
}

// element.childNodes returns an array of an element's child nodes.
// element.firstChild returns the first child node of an element.
// element.lastChild returns the last child node of an element.
// element.hasChildNodes returns true if an element has any child nodes, otherwise false.
// element.nextSibling returns the next node at the same tree level.
// element.previousSibling returns the previous node at the same tree level.
// element.parentNode returns the parent node of an element.

var p = document.getElementById('nyork');
var y = p.childNodes;
for (var x = 0; y.length; x++) {
  y[x] = "new text";
}

//Changing Attributes
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";

//Changing Style
var u = document.getElementById("demo1");
u.style.color = "6600FF";
u.style.width = "100px";

//Creating Elements
// element.cloneNode() clones an element and returns the resulting node.
// document.createElement(element) creates a new element node.
// document.createTextNode(text) creates a new text node.


// element.appendChild(newNode) adds a new child node to an element as the last child node.
// element.insertBefore(node1, node2) inserts node1 as a child before node2.
var par = document.createElement("p");
var node = document.createTextNode("A New Text!");
par.appendChild(node);

var div = document.getElementById("dem");
div.appendChild(par);

//Event Handling on a variable.
var x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}

// addEventListener(event, function, useCapture)

//Capturing propagation
// elem1.addEventListener("click", myFunction, true);

//Bubbling propagation
// elem2.addEventListener("click", myFunction, false);

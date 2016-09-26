var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');

h1.innerText = "Head 1 1";
h2.innerText = "Head 2 2";
h3.innerText = "Head 3 3";

document.body.appendChild(h1);
h1.innerText = "Head 1";
document.body.appendChild(h2);
h1.innerText = "Head 6";
document.body.appendChild(h3);
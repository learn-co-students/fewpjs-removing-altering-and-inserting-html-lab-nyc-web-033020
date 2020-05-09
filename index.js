// Write your code here!

let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement('H1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Dan is the champion!";
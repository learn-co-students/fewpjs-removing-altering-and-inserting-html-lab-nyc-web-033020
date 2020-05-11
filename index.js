// Write your code here!

document.querySelector("main#main").remove();
// find the main with id main
const newHeader = document.createElement("h1");
// make an h1 in the document
newHeader.id = "victory"
// the id of the h1 to be "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
// the inner html is now this
newHeader.className = "victory";
// the class within this is victory
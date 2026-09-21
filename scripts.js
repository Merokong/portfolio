const button = document. queryselector("#fact button");
const fact = document.querySelector("#fun fact");

button.addEventListener("click", function() {
    fact.hidden = !fact.hidden;
});
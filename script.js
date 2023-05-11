const
  //Button selectors
  operands = document.querySelectorAll("[data-operand]"),
  backspace = document.querySelector("[data-backspace]"),
  allClearButton = document.querySelector("[data-all-clear]"),
  equals = document.querySelector("[data-equals]"),
  //Screen selectors
  previousEquation = document.getElementById("previous-equation"),
  result = document.getElementById("result");

//Functions
function removeLast() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function allClear() {
  result.innerHTML = "";
  previousEquation.innerHTML = "";
}

function solveEquation() {
  previousEquation.innerHTML =
    result.innerHTML.replace(/\(|\)|\÷|\×|\-|\+/g, x => `<span>${x}</span>`);
  result.innerHTML = eval(result.innerHTML.replace("×", "*").replace("÷", "/")
    .replace(/[a-z]/ig, "")).toFixed(10);// Make eval() safe
  while (result.innerHTML.endsWith(0) || result.innerHTML.endsWith("."))
    removeLast();
  };

//Events
for (let i = 0; i < operands.length; i++) {
  operands[i].onclick = () => {
    if (result.innerHTML.length == 22) {
      alert("Hopa! \nEcuația poate fi de cel mult 22 cifre."); 
      return;
    }
    result.innerHTML += operands[i].innerHTML;
  };
}
backspace.onclick = () => removeLast();
allClearButton.onclick = () => allClear();
equals.onclick = () => solveEquation();

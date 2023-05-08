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
    .replace(/[a-z]/ig, "")); // Make eval() safe
}

//Events
for (let i = 0; i < operands.length; i++) {
  operands[i].onclick = () => {
    if (result.innerHTML.length == 11) {
      alert("Hopa! \nEcuația poate fi de cel mult 11 cifre.");
      return; 
    }
    result.innerHTML += operands[i].innerHTML;
  };
}
backspace.onclick = () => removeLast();
allClearButton.onclick = () => allClear();
equals.onclick = () => solveEquation();
//In solveEquation() to fix float inaccuracy
  // if (result.innerHTML.toString().includes(".")) {
  //   const resultArrayValues = result.innerHTML.split("/\(|\)|\÷|\×|\-|\+/g"),
  //     resultArrayOperators = result.innerHTML.split("/\(|\)|\÷|\×|\-|\+/g");
  //   for (let i = 0; i < resultArrayValues.length; i++) {
  //     if (isNaN(resultArrayValues[i])) {
  //       resultArrayValues.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   resultArrayValues.map(x => x * 10);//Array of non-operators with values ×10
  //   }
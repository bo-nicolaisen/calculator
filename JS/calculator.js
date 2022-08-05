function getCalculatordata() {
  console.log("math function");

  // get numbers from form husk datatype
  let firstValue = Number(document.getElementById("firstValue").value);
  let secondValue = Number(document.getElementById("secondValue").value);

  // get math operation from form

  let mathOperator = "select math operator";
  let selector = document.querySelector('input[name="mathOperation"]:checked');
  if (selector) mathOperator = selector.value;
  console.log(firstValue, secondValue, mathOperator);

  let result = "error";

  //    evaluer metode valget fra form

  switch (mathOperator) {
    case "plus":
      result = firstValue + secondValue;
      break;
    case "minus":
      result = firstValue - secondValue;
      break;

    default:
      result = mathOperator;
  }

  console.log(result);
}






function getCalculatordata() {
  console.log("math function");

  // get numbers from form husk datatype
  let firstValue = Number(document.getElementById("firstValue").value);
  let secondValue = Number(document.getElementById("secondValue").value);

  // get math operation from form

  let mathOperator = "select math operator";

  let selector = document.querySelector('input[name="mathOperation"]:checked');
  if (selector) mathOperator = selector.value;

  mathRouter(firstValue, secondValue, mathOperator);
}



function mathRouter(firstValue, secondValue, mathOperator) {

  let result = "error";

  //    evaluer metode valget fra form

  switch (mathOperator) {
    case "plus":
      result = simpleMath(firstValue, secondValue, mathOperator);

      break;
    case "minus":
      result = simpleMath(firstValue, secondValue, mathOperator);
      break;

    case "multiply":
      result = simpleMath(firstValue, secondValue, mathOperator);
      break;

    case "divide":
      result = simpleMath(firstValue, secondValue, mathOperator);
      break;

    default:
      result = mathOperator;
  }

  console.log(result);
}




function simpleMath(firstVal, secondVal, myOp) {

  switch (myOp) {
    case "plus":
      return (firstVal + secondVal);

      break;
    case "minus":
      return (firstVal - secondVal);
      break;
    case "multiply":
      return (firstVal * secondVal);
      break;


    default:
      return (false);
  }

}
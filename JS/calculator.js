




function getCalculatordata() {
  console.log("math function");

  // get numbers from form husk datatype
  let firstValue = Number(document.getElementById("firstValue").value);
  let secondValue = Number(document.getElementById("secondValue").value);


  // get math operation from form

  let mathOperator = "select math operator";

  let selector = document.querySelector('input[name="mathOperation"]:checked');
  if (selector) mathOperator = selector.value;

  validateData(firstValue, secondValue, mathOperator);
}



function validateData(firstValue, secondValue, mathOperator) {

  let errorMsg = false

  if (firstValue == NaN) {
    errorMsg = "input 1 er ikke et nummer!";
  }
  if (secondValue == NaN) {
    errorMsg = "input 1 er ikke et nummer!";
  }



  if (mathOperator.search(/plus|gange|dividere|minus/)) {
    errorMsg = "not an operator!";
  }



  if (!errorMsg) {
    mathRouter(firstValue, secondValue, mathOperator);
  } else {
    errorHandler(errorMsg);

  }

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

    case "gange":
      result = simpleMath(firstValue, secondValue, mathOperator);
      break;

    case "dividere":
      result = divide(firstValue, secondValue, mathOperator);
      break;

    default:
      result = mathOperator;
  }

  showResult(result);
}


function showResult(result) {
  console.log(result);

}



function divide(firstVal, secondVal, myOp) {

  if (firstVal == 0 || secondVal == 0) {
    errorHandler("cannot divide by zero!");
  } else {
    return (firstVal / secondVal);
  }


}


function simpleMath(firstVal, secondVal, myOp) {

  switch (myOp) {
    case "plus":
      return (firstVal + secondVal);

      break;
    case "minus":
      return (firstVal - secondVal);
      break;
    case "gange":
      return (firstVal * secondVal);
      break;


    default:
      return (false);
  }

}

function errorHandler(errorMsg) {

  alert(errorMsg);
}
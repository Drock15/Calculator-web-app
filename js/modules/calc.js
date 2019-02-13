const Calculate = (_ => {
  let numArray = [];
  let addedNumbersArray = [];
  let minusNumbersArray = [];
  let timesNumbersArray = [];
  let divideNumbersArray = [];
  let finalNumber = 0;

  const $calculator = document.querySelector(".calculator");
  const $total = document.querySelector(".calculator__total");

  const listeners = _ => {
    $calculator.addEventListener("click", event => {
      if (event.target.matches(".digits")) {
        checkValue(event.target.innerHTML);
        $total.innerHTML = numArray.join("");
      }
      if (event.target.matches(".operator")) {
        checkOperator(event.target.innerHTML);
      }
    });
  };

  const checkOperator = symbol => {
    if (symbol === "+") {
      addedNumbersArray.push(numberArrayStorage(numArray));
      numArray.length = 0;
      $total.innerHTML = "";
    }
    if (symbol === "-") {
      minusNumbersArray.push(numberArrayStorage(numArray));
      numArray.length = 0;
      $total.innerHTML = "";
    }
    if (symbol === "x") {
      timesNumbersArray.push(numberArrayStorage(numArray));
      numArray.length = 0;
      $total.innerHTML = "";
    }
    if (symbol === "/") {
      divideNumbersArray.push(numberArrayStorage(numArray));
      numArray.length = 0;
      $total.innerHTML = "";
    }
    if (symbol === "=") {
      if (addedNumbersArray.length > 0) {
        finalNumber = parseInt(numArray.join(""), 10);
        let addSum = 0;
        for (let numbers of addedNumbersArray) {
          addSum += add(numbers);
        }
        let finalSum = addSum + finalNumber;
        $total.innerHTML = finalSum;
      }
      if (minusNumbersArray.length > 0) {
        finalNumber = parseInt(numArray.join(""), 10);
        let difference = minus(minusNumbersArray, finalNumber);
        $total.innerHTML = difference;
      }
      if (timesNumbersArray.length > 0) {
        finalNumber = parseInt(numArray.join(""), 10);
        let product = times(timesNumbersArray, finalNumber);
        $total.innerHTML = product;
      }
      if (divideNumbersArray.length > 0) {
        finalNumber = parseInt(numArray.join(""), 10);
        let quotient = divide(divideNumbersArray, finalNumber);
        $total.innerHTML = quotient;
      }
    }
  };

  const checkValue = value => {
    if (value === "C") {
      numArray.length = 0;
      addedNumbersArray.length = 0;
      minusNumbersArray.length = 0;
      timesNumbersArray.length = 0;
      divideNumbersArray.length = 0;
      $total.innerHTML = "";
    } else {
      collectNumbers(Number(value));
    }
  };

  const collectNumbers = value => {
    numArray.push(value);
  };

  const numberArrayStorage = nums => {
    let firstNumber = nums.join("");
    let addStoredToNumber = parseInt(firstNumber, 10);

    return addStoredToNumber;
  };

  const add = numbersToAdd => {
    let sum = 0;
    sum += numbersToAdd;

    return sum;
  };

  const minus = (numsArrayToSubtract, lastNumberBeforeEquals) => {
    let difference = numsArrayToSubtract[0];

    if (numsArrayToSubtract.length === 1) {
      difference = difference;
    } else {
      for (let i = 1; i < numsArrayToSubtract.length; i++) {
        difference -= numsArrayToSubtract[i];
      }
    }
    return difference - lastNumberBeforeEquals;
  };

  const times = (numsArrayToMultipy, lastNumberBeforeEquals) => {
    let product = numsArrayToMultipy[0];

    if (numsArrayToMultipy.length === 1) {
      product = product;
    } else {
      for (let i = 1; i < numsArrayToMultipy.length; i++) {
        product *= numsArrayToMultipy[i];
      }
    }
    return product * lastNumberBeforeEquals;
  };

  const divide = (numsArrayToDivide, lastNumberBeforeEquals) => {
    let quotient = numsArrayToDivide[0];

    if (numsArrayToDivide.length === 1) {
      quotient = quotient;
    } else {
      for (let i = 1; i < numsArrayToDivide.length; i++) {
        quotient /= numsArrayToDivide[i];
      }
    }
    return quotient / lastNumberBeforeEquals;
  };

  const total = (a, b) => {};

  const init = _ => {
    listeners();
  };

  return {
    init
  };
})();

export default Calculate;

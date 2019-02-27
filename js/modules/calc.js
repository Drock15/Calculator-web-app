const Calculate = (_ => {
  let numArray = [];
  let pendingNumbersArray = [];
  let equals;

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
      pendingNumbersArray.push(numArray.join(''));
      pendingNumbersArray.push('+');
      numArray.length = 0;
      $total.innerHTML = "0";
    }
    if (symbol === "-") {
      pendingNumbersArray.push(numArray.join(''));
      pendingNumbersArray.push('-');
      numArray.length = 0;
      $total.innerHTML = "0";
    }
    if (symbol === "x") {
      pendingNumbersArray.push(numArray.join(''));
      pendingNumbersArray.push('*');
      numArray.length = 0;
      $total.innerHTML = "0";
    }
    if (symbol === "/") {
      pendingNumbersArray.push(numArray.join(''));
      pendingNumbersArray.push('/');
      numArray.length = 0;
      $total.innerHTML = "0";
    }
    if (symbol === "=") {
      equals = eval(`${pendingNumbersArray.join(' ')} ${numArray.join('')}`);
      $total.innerHTML = equals;
      pendingNumbersArray.length = 0;
    }
  };

  const checkValue = value => {
    if (value === "C") {
      numArray.length = 0;
      pendingNumbersArray.length = 0;
      $total.innerHTML = "0";
    } else {
      collectNumbers(Number(value));
    }
  };

  const collectNumbers = value => {
    numArray.push(value);
  };

  const init = _ => {
    listeners();
  };

  return {
    init
  };
})();

export default Calculate;

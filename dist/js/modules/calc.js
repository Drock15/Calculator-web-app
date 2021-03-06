import { Sound } from "./sound.js";

const Calculate = (_ => {
  let lastNumberTotal;
  let pendingNumbersArray = [];

  // Cache the DOM
  const calculatorTotalScreen = document.querySelector(".calculator__total");
  const calculatorBtns = document.querySelector(".calculator-btn__container");

  const listeners = _ => {
    calculatorBtns.addEventListener("click", event => {
      if (event.target.matches("input")) {
        Sound.clickSound.play();
        let buttonPicked = event.target;
        buttonPicked.classList.add("interactiveColor");
        setTimeout(
          () => buttonPicked.classList.remove("interactiveColor"),
          250
        );
        if (event.target.value === "C") {
          pendingNumbersArray.length = 0;
          calculatorTotalScreen.innerHTML = "0";
        } else if (event.target.value === "=") {
          calculatorTotalScreen.innerHTML = outputTotalScreen(
            pendingNumbersArray
          );
          pendingNumbersArray.length = 0;
          pendingNumbersArray.push(lastNumberTotal);
        } else if (event.target.value === "←") {
          pendingNumbersArray.pop();
          if (pendingNumbersArray.length === 0) {
            calculatorTotalScreen.innerHTML = 0;
          } else {
            calculatorTotalScreen.innerHTML = pendingNumbersArray.join("");
          }
        } else {
          checkValue(event.target.value);
        }
      }
    });
  };

  const checkValue = value => {
    if (value !== "x") {
      pendingNumbersArray.push(value);
    } else {
      pendingNumbersArray.push("*");
    }

    calculatorTotalScreen.innerHTML = pendingNumbersArray.join("");
  };

  const outputTotalScreen = pendingCalculation => {
    lastNumberTotal = eval(pendingCalculation.join(""));

    return lastNumberTotal;
  };

  const init = _ => {
    listeners();
  };

  return {
    init
  };
})();

export default Calculate;

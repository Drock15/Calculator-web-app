const Instructions = (_ => {
  const hideShowInstructionsEl = document.querySelector(".show-instructions");
  const instructionsTextEl = document.querySelector(".instructions-text");
  const caretUpDownEl = document.querySelector(".fas");

  //set carret down
  caretUpDownEl.classList.add("fa-caret-down");
  let show = false;

  const listeners = _ => {
    hideShowInstructionsEl.addEventListener("click", () => {
      instructionsTextEl.classList.toggle("hide-show");

      if (!show) {
        caretUpDownEl.classList.remove("fa-caret-down");
        caretUpDownEl.classList.add("fa-caret-up");
        show = true;
      } else {
        caretUpDownEl.classList.remove("fa-caret-up");
        caretUpDownEl.classList.add("fa-caret-down");
        show = false;
      }
    });
  };

  const init = _ => {
    listeners();
  };

  return {
    init
  };
})();
export default Instructions;

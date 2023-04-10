const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function onImputChange({ currentTarget: { value } }) {
  textEl.style.fontSize = `${value}px`;
}

inputEl.addEventListener("input", onImputChange);

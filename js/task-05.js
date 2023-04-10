const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onImputChange({ currentTarget: { value } }) {
  // const value = e.currentTarget.value;
  value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = value);
}

inputEl.addEventListener("input", onImputChange);

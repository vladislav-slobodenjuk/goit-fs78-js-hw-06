const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onInputChange({ currentTarget: { value } }) {
  // const value = e.currentTarget.value;
  value.trim() === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = value.trim());
}

inputEl.addEventListener("input", onInputChange);

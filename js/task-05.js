const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onInput({ currentTarget: { value } }) {
  // const value = e.currentTarget.value;
  value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = value);
}

inputEl.addEventListener("input", onInput);

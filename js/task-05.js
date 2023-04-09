const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

function onInput({ currentTarget: { value } }) {
  // function onInput(e) {
  // const value = e.currentTarget.value;
  input.textContent = value;
  value === "" ? (name.textContent = "Anonymous") : (name.textContent = value);
}

input.addEventListener("input", onInput);

const inputEl = document.querySelector("#validation-input");
const validLength = Number(inputEl.getAttribute("data-length"));

function onInputBlur({ currentTarget: { value } }) {
  const valueLength = value.trim().length;

  if (valueLength === validLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}

inputEl.addEventListener("blur", onInputBlur);

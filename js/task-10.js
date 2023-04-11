const ancestorEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

let currentAmount = 1;
let size = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 1) return null;

  const markup = [];

  for (let i = 1, width = size + 10; i <= amount; i += 1, width += 10) {
    size = width;

    const div = `<div
                  style='
                    width: ${width}px;
                    height: ${width}px;
                    background-color: ${getRandomHexColor()}'
                  >
                  </div>`;
    markup.push(div);
  }

  ancestorEl.insertAdjacentHTML("beforeend", markup.join(""));
}

function onImputChange({ currentTarget: { value } }) {
  currentAmount = value;
}

function onHandleCreateClick() {
  createBoxes(currentAmount);
  inputEl.value = 1;
  currentAmount = 1;
}

function onHandleDestroyClick() {
  ancestorEl.innerHTML = "";
  size = 20;

  inputEl.value = 1;
  currentAmount = 1;
}

inputEl.addEventListener("input", onImputChange);
createBtnEl.addEventListener("click", onHandleCreateClick);
destroyBtnEl.addEventListener("click", onHandleDestroyClick);

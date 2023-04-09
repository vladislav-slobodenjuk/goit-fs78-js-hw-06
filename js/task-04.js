const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

let counterValue = 0;

function handleClick(e) {
  const action = e.currentTarget.dataset.action;
  action === "increment" ? (counterValue += 1) : (counterValue -= 1);
  value.textContent = counterValue;
}

decrement.addEventListener("click", handleClick);
increment.addEventListener("click", handleClick);

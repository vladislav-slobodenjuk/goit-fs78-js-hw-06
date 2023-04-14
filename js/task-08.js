const formEl = document.querySelector(".login-form");

function onFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => (data[key] = value));
  const values = Object.values(data);

  for (const item of values) {
    if (item.length === 0) return alert("fill in all fields");
  }
  // const isEmptyValue = values.some((item) => item.length === 0);
  // if (isEmptyValue) return alert("fill in all fields");

  console.log(data);
  form.reset();
}

formEl.addEventListener("submit", onFormSubmit);

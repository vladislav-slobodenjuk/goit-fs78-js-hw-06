const formEl = document.querySelector(".login-form");

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  const { email, password } = e.currentTarget.elements;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("fill in both fields");
    return;
  }

  // Object.values(data).forEach((value) => {
  //   if (value.length === 0) {
  //     alert("fill in both fields");
  //     return;
  //   }
  // });

  console.log(data);
  formEl.reset();
}

formEl.addEventListener("submit", onFormSubmit);

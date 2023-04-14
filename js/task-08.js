const formEl = document.querySelector(".login-form");

function onFormSubmit(e) {
  e.preventDefault();

  // let result = {};
  // const formData = new FormData(e.currentTarget);
  // formData.forEach((a, b) => (result[b] = a));

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (email.length === 0 || password.length === 0) {
    return alert("fill in both fields");
  }

  // console.log(result);
  console.log({ email, password });
  formEl.reset();
}

formEl.addEventListener("submit", onFormSubmit);

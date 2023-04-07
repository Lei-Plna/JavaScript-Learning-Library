const oForm = document.querySelector(".js_form");

oForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const oInput = document.querySelector(".js_input");
  const message = oInput.value;
  const username = "LivBetter";
  const data = { username, message };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:8000/message", options);
}

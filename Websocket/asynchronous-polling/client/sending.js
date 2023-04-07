const oForm = document.querySelector(".js-form");

oForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  // solve compatible problem for event target
  const event = e || window.event;
  // stop the default behavior of the form event which would flush the page
  event.preventDefault();
  const oInput = document.querySelector(".js_input");
  const message = oInput.value;
  const username = "LivBetter";
  const data = { username, message };
  const options = {
    method: "POST",
    // the server allow the request to be sent with the content-type of application/json
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  // here use fetch also can use axios by cdn
  fetch("http://localhost:8000/message", options);
}

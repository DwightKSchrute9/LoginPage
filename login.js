const form = document.querySelector("form");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const login = loginInput.value;
  const password = passwordInput.value;

  if (login === "admin" && password === "admin") {
    window.location.replace("index.html");
    //alert("Accesso autorizzato");

  } else {
    alert("Accesso negato");
  }
});



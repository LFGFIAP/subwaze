// js/login.js
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  if (username && password) {
    alert(`Bem-vindo, ${username}!`);
    window.location.href = "home.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

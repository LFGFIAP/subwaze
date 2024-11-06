const menuMobile = document.querySelector("#menu-mobile");
const nav = document.querySelector("#nav");
const menuClose = document.querySelector("#menu-close");

// Abrir o menu mobile
menuMobile.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.add("active");
  menuMobile.classList.add("hidden"); // Oculta o botão de menu
  menuMobile.style.display = "none";
});

// Fechar o menu mobile ao clicar no botão de "fechar" (X)
menuClose.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.remove("active");
  menuMobile.classList.remove("hidden"); // Reexibe o botão de menu
  menuMobile.style.display = "flex";
});

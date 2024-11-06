const menuMobile = document.querySelector("#menu-mobile");
const nav = document.querySelector("#nav");
const menuClose = document.querySelector("#menu-close");
const btnBuscar = document.querySelector("#btn-buscar");
const stationInfo = document.querySelector("#station-info");
const trainMap = document.querySelector("#train-map");
const vagaoCapacity = document.querySelector("#vagao-capacity");

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

btnBuscar.addEventListener("click", function (event) {
  event.preventDefault();
  stationInfo.classList.remove("hidden");
  trainMap.classList.remove("hidden");
  vagaoCapacity.classList.remove("hidden");
});

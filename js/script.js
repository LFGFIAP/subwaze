const menuMobile = document.querySelector("#menu-mobile");
const nav = document.querySelector("#nav");
const menuClose = document.querySelector("#menu-close");
const btnBuscar = document.querySelector("#btn-buscar");
const stationInfo = document.querySelector("#station-info");
const trainMap = document.querySelector("#train-map");
const vagaoCapacity = document.querySelector("#vagao-capacity");
const statusMsg = document.querySelector("#status-msg");

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
  stationInfo.classList.add("hidden");
  trainMap.classList.add("hidden");
  vagaoCapacity.classList.add("hidden");

  const locationInput = document.querySelector(
    'input[placeholder="Informe sua localização atual"]'
  ).value;
  const destinationInput = document.querySelector(
    'input[placeholder="Para onde deseja ir?"]'
  ).value;

  if (!locationInput || !destinationInput) {
    statusMsg.classList.remove("hidden");
    statusMsg.textContent =
      "Por favor, preencha os campos de localização e destino.";
    return; // Não prossegue se os campos estiverem vazios
  }

  statusMsg.classList.remove("hidden");
  statusMsg.textContent = "Encontrando o melhor caminho...";

  // Simular busca para demonstrar feedback
  setTimeout(() => {
    stationInfo.classList.remove("hidden");
    trainMap.classList.remove("hidden");
    vagaoCapacity.classList.remove("hidden");
    statusMsg.classList.add("hidden"); // Esconde o status após a busca
  }, 2000);
});

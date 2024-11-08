const menuMobile = document.querySelector("#menu-mobile");
const nav = document.querySelector("#nav");
const menuClose = document.querySelector("#menu-close");
const btnBuscar = document.querySelector("#btn-buscar");
const stationInfo = document.querySelector("#station-info");
const trainMap = document.querySelector("#train-map");
const vagaoCapacity = document.querySelector("#vagao-capacity");
const statusMsg = document.querySelector("#status-msg");
const etapasContainer = document.querySelector("#etapas-container");
const etapaAtualElement = document.getElementById("etapa-atual");
const proximaEtapaBtn = document.getElementById("proxima-etapa");
let etapaIndex = 0;
let highlightedVagao = null;
const etapaImagemElement = document.getElementById("etapa-imagem");

menuMobile.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.add("active");
  menuMobile.classList.add("hidden");
  menuMobile.style.display = "none";
});

menuClose.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.remove("active");
  menuMobile.classList.remove("hidden");
  menuMobile.style.display = "flex";
});

btnBuscar.addEventListener("click", function (event) {
  etapaImagemElement.classList.remove("hidden");
  event.preventDefault();
  stationInfo.classList.add("hidden");
  trainMap.classList.add("hidden");
  vagaoCapacity.classList.add("hidden");
  etapasContainer.classList.add("hidden");

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
    return;
  }

  statusMsg.classList.remove("hidden");
  statusMsg.textContent = "Encontrando o melhor caminho...";

  setTimeout(() => {
    etapaIndex = 0;
    etapaAtualElement.textContent = etapas[etapaIndex].texto;
    etapaImagemElement.src = etapas[etapaIndex].imagem;
    stationInfo.classList.remove("hidden");
    trainMap.classList.remove("hidden");
    vagaoCapacity.classList.remove("hidden");
    etapasContainer.classList.remove("hidden");
    statusMsg.classList.add("hidden");

    const vagaoList = document.querySelectorAll(".vagao");
    vagaoList.forEach((vagao) => vagao.classList.remove("highlight"));
    highlightedVagao = vagaoList[Math.floor(Math.random() * vagaoList.length)];
    highlightedVagao.classList.add("highlight");
  }, 2000);
});

const etapas = [
  { texto: "Desça as escadas", imagem: "/img/etapa1.png" },
  { texto: "Vire à direita", imagem: "/img/etapa2.jpg" },
  { texto: "Caminhe até o final do corredor", imagem: "/img/etapa3.jpg" },
  { texto: "Aguarde na plataforma", imagem: "/img/etapa4.jpg" },
  { texto: "Dirija-se ao vagão mais vazio", imagem: "/img/etapa5.jpg" },
];

proximaEtapaBtn.addEventListener("click", () => {
  etapaIndex++;
  if (etapaIndex < etapas.length) {
    etapaAtualElement.textContent = etapas[etapaIndex].texto;
    etapaImagemElement.src = etapas[etapaIndex].imagem;
  } else if (etapaIndex === etapas.length) {
    const vagaoTexto = highlightedVagao
      ? highlightedVagao.textContent
      : "o vagão mais vazio";
    etapaAtualElement.textContent = `Você chegou ao ${vagaoTexto}!`;
    etapaImagemElement.classList.add("hidden");
    proximaEtapaBtn.textContent = "Finalizar";
  } else {
    etapasContainer.classList.add("hidden");
  }
});

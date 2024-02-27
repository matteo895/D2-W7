// Funzione per aggiornare il contatore e memorizzarlo in sessionStorage
function updateCounter() {
  let counter = sessionStorage.getItem("counter");
  counter = counter ? parseInt(counter) + 1 : 1;
  sessionStorage.setItem("counter", counter);
  document.getElementById("counterDisplay").textContent = counter;
}

// Aggiorna il contatore ogni secondo
setInterval(updateCounter, 1000);

// Inizializza il contatore alla prima apertura della pagina
window.onload = function () {
  const counter = sessionStorage.getItem("counter");
  if (counter) {
    document.getElementById("counterDisplay").textContent = counter;
  }
};

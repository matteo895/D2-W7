// Funzione per salvare il nome in localStorage
function saveName() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim(); // Rimuove spazi vuoti prima e dopo il nome

  if (name) {
    localStorage.setItem("userName", name);
    displaySavedName(name);
  } else {
    alert("Inserisci un nome valido.");
  }
}

// Funzione per rimuovere il nome precedentemente salvato da localStorage
function clearName() {
  localStorage.removeItem("userName");
  document.getElementById("savedName").textContent = "";
}

// Funzione per visualizzare il nome salvato sopra l'input field
function displaySavedName(name) {
  const savedNameContainer = document.getElementById("savedName");
  savedNameContainer.textContent = `Nome salvato: ${name}`;
}

// Caricare il nome salvato in localStorage se presente
window.onload = function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    displaySavedName(savedName);
  }
};

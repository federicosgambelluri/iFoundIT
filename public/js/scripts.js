// scripts.js

// Funzione per mostrare il popup di buon senso
function showPopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.style.display = 'block';
}

// Funzione per nascondere il popup
function hidePopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.style.display = 'none';
}

// Mostra il popup al caricamento della pagina
window.onload = function() {
  showPopup();
};

// Funzione per ottenere la posizione
function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      callback(`${position.coords.latitude},${position.coords.longitude}`);
    }, () => {
      const location = prompt("Inserisci la tua posizione (città, indirizzo):");
      callback(location);
    });
  } else {
    const location = prompt("Inserisci la tua posizione (città, indirizzo):");
    callback(location);
  }
}

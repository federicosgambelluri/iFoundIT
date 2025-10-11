

# I Found It 🗺️✨

**Un'applicazione web per aiutare le persone a ritrovare i propri oggetti smarriti, connettendo chi trova con chi cerca.**

"I Found It" è una piattaforma collaborativa che permette agli utenti di pubblicare annunci di oggetti ritrovati, specificando dettagli, foto e la posizione esatta su una mappa interattiva. Chi ha perso qualcosa può facilmente cercare tra gli annunci e visualizzare i dettagli per contattare il ritrovatore.

-----


## 🚀 Funzionalità Principali

  * **Pubblicazione Annunci**: Un form intuitivo permette di segnalare un oggetto ritrovato, includendo titolo, categoria, descrizione e contatto.
  * **Upload di Immagini**: Gestione completa del caricamento di immagini per ogni annuncio, con anteprima del file.
  * **Mappa Interattiva**:
      * **Selezione Posizione**: Gli utenti possono cercare un indirizzo, usare la loro posizione attuale o selezionare un punto preciso sulla mappa per indicare il luogo del ritrovamento.
      * **Visualizzazione Marker**: La pagina di ricerca mostra tutti gli annunci come marker su una mappa globale.
  * **Ricerca e Filtro**: Una lista dinamica degli annunci permette di cercare per parola chiave e ordinare i risultati per data.
  * **Dettaglio Annuncio**: Una modale mostra tutte le informazioni di un oggetto, inclusa un'immagine ingrandita e i dettagli di contatto.
  * **Backend Potente**: Tutta la logica di backend, inclusi database e storage, è gestita tramite Appwrite.

-----

## 🛠️ Tecnologie Utilizzate

  * **Frontend**:

      * HTML5
      * **Tailwind CSS** (tramite CDN)
      * JavaScript (ES6+)

  * **Backend (BaaS)**:

      * **Appwrite Cloud**: per la gestione del database e dello storage di file.

  * **API Esterne**:

      * **Google Maps Platform**:
          * **Maps JavaScript API**: per la visualizzazione delle mappe.
          * **Places API**: per la ricerca e l'autocompletamento degli indirizzi.
          * **Geocoding API**: per convertire indirizzi in coordinate e viceversa.

-----


## 🔮 Miglioramenti Futuri

  * **Autenticazione Utenti**: Per permettere agli utenti di gestire i propri annunci.
  * **Sistema di Notifiche**: Per avvisare un utente se un oggetto corrisponde alla sua ricerca.
  * **Chat Privata**: Per mettere in contatto diretto e sicuro chi trova e chi cerca.
  * **Ricerca Avanzata**: Filtrare per data, categoria e raggio sulla mappa.



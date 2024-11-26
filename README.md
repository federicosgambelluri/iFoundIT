# iFoundIT
Il sito WEB per cercare e trovare gli oggetti smarriti
La home del sito oltre all'header e al footer è divisa in due parte, due "bottoni giganti", uno per pubblicare gli articoli trovati per terra, e uno per cercare tra gli articoli presenti sul sito. Appena si cliccherà su una delle due schermate, verrà chiedo di accedre alla posizione oppure di inserrire il lugo dove si vuole pubblicare o cercare un articolo. Si può pensare anceh al contrario, quindi prima mettere la posizioen, e poi il seelttore sella pagina se pubblicare o cercare un aeticolo.
Gli articoli saranno formati da immagine, luogo, titolo, descrizone, ed un eventuale contatto per rintracciare la persona che ha trovato l'articolo oppure un vinvito a consegnarlo alle forze dell'ordine o al bar puiù vicino. Inoltre aggiungeer un selettore per segnare in seguiro se l'articolo è stato trovato  o no. 
Il sito non richiede registrazione, si spera sul buon senso degli utilizzatori. Magari mettere un popup iniziale per sottolineare il buon senso.
Il servizio sarà gratuito, verrà chiesto un tip quandi un articolo viene trovato. 
Preferirei fare il sito in questa maniera qui, piuttosto che uan vetrina fin da subito, per disincentivare coloro che guardno e vogliono accapararsi degli oggetti smarriti. 

Questa sarà la prima versione, utilizzera un db o un json per memorizzare i dati. 

Creare una grafica bella. 

Successivamene si può pensare di implementare quuaclsao di più complesso, ma visto ceh è un progetto opensource, non ne vale la pena siccome non mi pagano. 

Struttura Attuake:

iFoundIT/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   ├── index.html
│   ├── publish.html
│   └── search.html
├── data/
│   └── items.json
├── server.js
└── package.json

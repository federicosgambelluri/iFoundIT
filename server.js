const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const upload = multer({ dest: 'public/uploads/' });

// Endpoint per pubblicare un nuovo articolo
app.post('/api/items', upload.single('image'), (req, res) => {
  let items = JSON.parse(fs.readFileSync('./data/items.json'));
  const newItem = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact || '',
    image: req.file ? `/uploads/${req.file.filename}` : '',
    found: false
  };
  items.push(newItem);
  fs.writeFileSync('./data/items.json', JSON.stringify(items));
  res.status(201).send(newItem);
});

// Endpoint per ottenere gli articoli in base alla posizione
app.get('/api/items', (req, res) => {
  let items = JSON.parse(fs.readFileSync('./data/items.json'));
  const location = req.query.location;
  if (location) {
    items = items.filter(item => item.location.includes(location) && !item.found);
  }
  res.send(items);
});

// Endpoint per aggiornare lo stato di un articolo
app.put('/api/items/:id', (req, res) => {
  let items = JSON.parse(fs.readFileSync('./data/items.json'));
  const itemId = parseInt(req.params.id);
  items = items.map(item => {
    if (item.id === itemId) {
      item.found = req.body.found;
    }
    return item;
  });
  fs.writeFileSync('./data/items.json', JSON.stringify(items));
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});

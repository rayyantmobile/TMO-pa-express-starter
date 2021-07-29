const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});

let allBooks = {"Books":[]};

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.get("/api/books", (req, res) => {
  allBooks.Books.sort();
  res.status(200).send(allBooks);
});

app.post('/api/books', (req, res) => {
  let newBook = (req.body);
  console.log(newBook);
  allBooks.Books.push(newBook);

  res.status(201).send(newBook);
});

app.delete('/api/books', function (req, res) {
  for(let i in allBooks){
    allBooks[i].pop;
  }
  res.status(204);
})





module.exports = app;

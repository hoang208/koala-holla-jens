const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas_info" ORDER BY "name";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting koalas', error);
        res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/',  (req, res) => {
    let newKoala = req.body;
    console.log(`Adding koala`, newKoala);
  
    let queryText = `INSERT INTO "koalas_info" ("Name", "Age", "Gender","Tranfer Status","Notes")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransfer, newKoala.notes])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new book`, error);
        res.sendStatus(500);
      });
  });

// PUT


// DELETE

module.exports = koalaRouter;
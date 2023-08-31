const express = require('express');
const koalaRouter = express.Router();
const pool = require('../Modules/pool.js');
// DB CONNECTION

// modules/pool.js
// GET
koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas_info"';
    // let queryText = 'SELECT * FROM "koalas_info" ORDER BY "name";';

    console.log(queryText);
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
  
    let queryText = `INSERT INTO "koalas_info" ("Name", "Age", "Gender","Transfer_Status","Notes")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.Name, newKoala.Age, newKoala.Gender, newKoala.Transfer_Status, newKoala.Notes])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new koala`, error);
        res.sendStatus(500);
      });
  });

// PUT
koalaRouter.put('/koala_Pool/:id', (req, res) => {
   

    let idToUpdate = req.params.id;
    let newKoala = req.body.Transfer_Status;

    console.log('idToUpdate:', idToUpdate);
    console.log(':', );

    console.log('typeof newKoala:', typeof newKoala);
  
    let mySqlQuery = `
    UPDATE "koalas_info" SET "Transfer Status" = $1 WHERE id = $2;
    `;

    pool.query(mySqlQuery, [newKoala.Transfer_Status, idToUpdate])
    
        .then(
            (response) => {
                console.log("Update request successful", idToUpdate);
                res.sendStatus(200);
            }
        )
        .catch(
            (err) => {
                console.log(`Update request failed: ${idToUpdate}`, err);
                res.sendStatus(500);
            }
        )
})

module.exports = koalaRouter;
// DELETE


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


// PUT
koalaRouter.put('/koala_Pool/:id', (req, res) => {
   

    let idToUpdate = req.params.id;
    let newKoala = req.body.artist;

    console.log('idToUpdate:', idToUpdate);
    console.log(':', );

    console.log('typeof newKoala:', typeof newKoala);
  
    let mySqlQuery = `
    UPDATE "" SET "" = $1 WHERE id = $2;
    `;

    pool.query(mySqlQuery, [, idToUpdate])
    
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


// DELETE

module.exports = koalaRouter;
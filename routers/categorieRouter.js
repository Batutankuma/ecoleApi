const express = require('express');
const router = express.Router();
const CategorieModels = require('../models/categorieModels');


//all 
router.get('/categorie/all', (req, res) => {
    var categorieRead = CategorieModels.readall();
    categorieRead.then((result)=> res.json(result))
    .catch((error)=> res.json(error));
});

//id
router.get('/categorie/id/:id', (req, res) => {
   CategorieModels.readId(res,req.params.id);
});

//create
router.post('/categorie/create', (req, res) => {
    var nom = req.body.nom;
    var agent = req.body.agent;
    var classe = new CategorieModels(nom,agent);
    classe.create(res);
});

//update
//delete





module.exports = router;
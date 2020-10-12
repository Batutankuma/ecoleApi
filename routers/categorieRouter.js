const express = require('express');
const router = express.Router();
const CategorieModels = require('../models/categorieModels');


//all 
router.get('/categorie/all', (req, res) => {
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
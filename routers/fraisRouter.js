const express = require('express');
const router = express.Router();
const FraisModels = require('../models/fraisModels');


//all 
router.get('/frias/all', (req, res) => {
    var fraisRead = FraisModels.readall();
    fraisRead.then((result)=>{
        res.json(result);
    }).catch((error)=> res.json(error));
});

//id
router.get('/frais/id/:id', (req, res) => {
    var frais = FraisModels.readId(req.params.id);
    frais.then((response)=>  res.json(response))
    .catch((error)=> res.status(400).json(error));
});

//create
router.post('/frais/create', (req, res) => {
    console.log(req.body);
    var titre = req.body.titre;
    var montant = req.body.montant;
    var categorie = req.body.categorie;
    var agent = req.body.agent;
    var frais = new FraisModels(titre,montant,categorie,agent);
    frais.create(res);
});

//update
//delete





module.exports = router;
const express = require('express');
const paiementFrais = require('./../modules/paieModules');
const paiementModels = require('./../models/paiementModels');
const router = express.Router();


//all 
router.get('/paiement/all', (req, res) => {
    var paiementRead = paiementModels.readall();
    paiementRead.then((result)=> res.json(result))
    .catch((error)=> res.json(error));
});

//id
router.get('/paiement/id/:id', (req, res) => {
   paiementFrais.readId(res,req.params.id);
});

//create
router.post('/paiement/create', (req, res) => {
    var montant = req.body.montant;
    var frais = req.body.frais;
    var eleve = req.body.eleve;
    var titeur = req.body.titeur;
    var agent = req.body.agent;
    console.log(req.body);
    paiementFrais(eleve,frais,montant,titeur,agent,res);
});

//update
//delete





module.exports = router;
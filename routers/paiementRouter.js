const express = require('express');
const paiementFrais = require('../modules/paieModules');
const router = express.Router();


//all 
router.get('/paiement/all', (req, res) => {
    var paiementRead = paiementFrais.readall();
    paiementRead.then((result)=> res.json(result))
    .catch((error)=> res.json(error));
});

//id
router.get('/paiement/id/:id', (req, res) => {
   FraisModels.readId(res,req.params.id);
});

//create
router.post('/paiement/create', (req, res) => {
    var montant = req.body.montant;
    var frais = req.body.frais;
    var eleve = req.body.eleve;
    var titeur = req.body.titeur;
    var agent = req.body.agent;
    paiementFrais(eleve,frais,montant,titeur,agent,res);
});

//update
//delete





module.exports = router;
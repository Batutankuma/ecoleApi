const express = require('express');
const router = express.Router();
const DocumentModels = require('../models/documentModels');


//all 
router.get('/document/all', (req, res) => {
});

//id
router.get('/document/id/:id', (req, res) => {
   DocumentModels.readId(res,req.params.id);
});

//create
router.post('/document/create', (req, res) => {
    var nom = req.body.nom;
    var num_doc = req.body.num;
    var eleve = req.body.eleve;
    var agent = req.body.agent;
    var document = new DocumentModels(num_doc,nom,eleve,agent);
    document.create(res);
});

//update
//delete





module.exports = router;
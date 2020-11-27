const express = require('express');
const router = express.Router();
const EleveModels = require('./../models/eleveModels');


//all 
router.get('/eleve/all', (req, res) => {
    var eleveRead = EleveModels.readall();
    eleveRead.then((result)=> res.json(result))
    .catch((error)=> res.json(error));
});

//id
router.get('/eleve/id/:id', (req, res) => {
    var eleve = EleveModels.readId(req.params.id);
    eleve.then((response)=>  res.json(response))
    .catch((error)=> res.status(400).json(error));
});

//create
router.post('/eleve/create', (req, res) => {
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var date = new Date();
    var sexe = req.body.sexe;
    var annee_a = req.body.annee_a;
    var annee_b = req.body.annee_b;
    var avatar = req.body.avatar;
    var agent = req.body.agent;
    var titeur = req.body.titeur;
    var categorie = req.body.categorie;
    var classe =req.body.classe;

    var eleve = new EleveModels(nom,prenom,date,sexe,annee_a,annee_b,avatar,agent,titeur,categorie,classe);
    eleve.create(res);
});
//update
//delete





module.exports = router;
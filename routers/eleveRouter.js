const express = require('express');
const router = express.Router();
const EleveModels = require('./../models/eleveModels');


//all 
router.get('/eleve/all', (req, res) => {
});

//id
router.get('/eleve/id/:id', (req, res) => {
    var eleve = EleveModels.readId(req.params.id);
    console.log(eleve);
    eleve.then((response)=>  res.json(response))
    .catch((error)=> res.status(400).json(error));
});

//create
router.post('/eleve/create', (req, res) => {
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var postnom = req.body.postnom;
    var date = new Date();
    //true == hom and false == fem
    var sexe = true;
    var annee_a = req.body.annee_a;
    var annee_b = req.body.annee_b;
    var avatar = req.body.avatar;
    var agent = 1//req.body.agent;
    var titeur = 1//req.body.titeur;
    var categorie = 1//req.body.categorie;
    var classe =1// req.body.classe;

    var eleve = new EleveModels(nom,prenom,postnom,date,sexe,annee_a,annee_b,avatar,agent,titeur,categorie,classe);
    eleve.create(res);
});
//update
//delete





module.exports = router;
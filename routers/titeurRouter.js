const express = require('express');
const router = express.Router();
const TiteurModels = require('./../models/titeurModels');


//all 
router.get('/titeur/all', (req, res) => {
});

//id
router.get('/titeur/id/:id', (req, res) => {
    var titeur = TiteurModels.readId(req.params.id);
    titeur.then((response)=>  res.json(response))
    .catch((error)=> res.status(400).json(error));
});

//create
router.post('/titeur/create', (req, res) => {
    var adresse = req.body.adresse;
    var telephone = req.body.telephone;
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var password = req.body.password;
    var avatar = req.body.avatar;
    var agent = req.body.agent;

    var titeur = new TiteurModels(nom,prenom,telephone,password,avatar,adresse,agent);
    titeur.create(res);
});
//update
//delete





module.exports = router;
const express = require('express');
const router = express.Router();
const AgentModels = require('./../models/agentModels');


//all 
router.get('/agent/all', (req, res) => {
    var agentRead = AgentModels.readall();
    agentRead.then((result)=>{
        res.json(result);
    }).catch((error)=> res.json(error));
});

//matricule
router.get('/agent/matricule/:matricule', (req, res) => {
    var agent = AgentModels.readmatri(req.params.matricule);
    agent.then((response)=>  res.json(response))
    .catch((error)=> res.status(400).json({"type":"Error","Message":error}));
});

//create
router.post('/agent/create', (req, res) => {
    var matricule = req.body.matricule;
    var pseudo = req.body.pseudo;
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var password = req.body.password;
    var avatar = req.body.avatar;
    var role = req.body.role;

    var agent = new AgentModels(matricule,pseudo,nom,prenom,password,avatar,role);
    agent.create(res);
});
//update
//delete





module.exports = router;
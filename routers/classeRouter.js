const express = require('express');
const router = express.Router();
const ClasseModels = require('./../models/classeModels');


//all 
router.get('/classe/all', (req, res) => {
    var classeRead = ClasseModels.readall();
    classeRead.then((result)=>{
        res.json(result);
    }).catch((error)=> res.json(error));
});

//id
router.get('/classe/id/:id', (req, res) => {
   ClasseModels.readId(res,req.params.id);
});

//create
router.post('/classe/create', (req, res) => {
    var nom = req.body.nom;
    var agent = req.body.agent;
    var classe = new ClasseModels(nom,agent);
    classe.create(res);
});

//update
//delete





module.exports = router;
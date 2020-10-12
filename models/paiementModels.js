const paiementModels= require('./../Controllers/paiementController');
const titeurModels = require('./titeurModels');
const eleveModels = require('./eleveModels');
const fraisModels = require('./fraisModels');
const agentModels = require('./agentModels');
const paimentModule = require('./../modules/paieModules');
const paiementFrais = require('./../modules/paieModules');

class Paiement {
    constructor(montant,frais,eleve,titeur,agent,montantRest) {
        this.montantRest = montantRest;
        this.montant = montant;
        this.frais = frais;
        this.eleve = eleve;
        this.titeur = titeur;
        this.agent = agent;
    }

    //create
    create(res) {
        console.log("****paiement" + this.frais);
        paiementModels.create({
            montant:this.montant,
            montantRest :this.montantRest,
            TiteurId: this.titeur,
            EleveId: this.eleve,
            FraiId:this.frais,
            AgentId:this.agent
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read id and matricule
    static readId(res, id) {
        paiementModels.findAll({ where: { id: id} })
            .then((response) => {
                res.status(200).json(response);
            }).catch((error) => {
                res.status(400).json(error);
            });
    }
}

module.exports = Paiement;
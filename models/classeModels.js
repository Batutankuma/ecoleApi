const classeModels= require('./../Controllers/classeController');

class Classe {
    constructor(nom,agent) {
        this.nom = nom;
        this.agent = agent
    }

    //create
    create(res) {
        console.log(this.agent);
        classeModels.create({
            nom: this.nom,
            AgentId: this.agent,
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read id and matricule
    static readId(res, id) {
        classeModels.findAll({ where: { id: id} })
            .then((response) => {
                res.status(200).json(response);
            }).catch((error) => {
                res.status(400).json(error);
            });
    }
}

module.exports = Classe;
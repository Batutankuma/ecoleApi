const categorieModels = require('../Controllers/categorieCategorie');

class Categorie {
    constructor(nom,agent) {
        this.nom = nom;
        this.agent = agent
    }

    //create
    create(res) {
        categorieModels.create({
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
        categorieModels.findAll({ where: { id: id} })
            .then((response) => {
                res.status(200).json(response);
            }).catch((error) => {
                res.status(400).json(error);
            });
    }
}

module.exports = Categorie;
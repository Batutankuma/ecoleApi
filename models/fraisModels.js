const fraisModels= require('./../Controllers/fraisController');
const categorieModels = require('./../Controllers/categorieCategorie');

class Frais {
    constructor(titre,montant,categorie,agent) {
        this.titre = titre;
        this.montant = montant;
        this.categorie = categorie;
        this.agent = agent
    }

    //create
    create(res) {
        fraisModels.create({
            titre: this.titre,
            montant:this.montant,
            CategorieId:this.categorie,
            AgentId: this.agent,
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read all
    static readall(){
        return fraisModels.findAll()
        .then((result)=> result)
        .catch((error)=> error);
    }

    //read id and matricule
    static readId(id) {
        return new Promise((resolve, reject) => {
        fraisModels.findByPk(id,{include:categorieModels})
                .then((response) => {
                    return resolve(response);
                }).catch((error) => {
                    return reject(error);
                });
        })
    }
}

module.exports = Frais;
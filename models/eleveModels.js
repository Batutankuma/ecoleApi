const eleveModels = require('./../Controllers/eleveController');
const titeurModels = require('./../Controllers/titeursController');
const agentModels = require('./../Controllers/agentController');
const categorieModels = require('./../Controllers/categorieCategorie');
const classeModels = require('./../Controllers/classeController');

class Eleve {
    constructor(nom, prenom, data_nais, sexe, anne_a, anne_b, avatar, agent, titeur, categorie, classe) {
        this.nom = nom
        this.prenom = prenom;
        this.data_nais = data_nais;
        this.sexe = sexe;
        this.anne_a = anne_a;
        this.anne_b = anne_b;
        this.avatar = avatar;
        this.agent = agent;
        this.titeur = titeur;
        this.categorie = categorie;
        this.classe = classe
    }
    //create
    create(res) {
        eleveModels.create({
            nom: this.nom,
            prenom: this.prenom,
            data_naissance: this.data_nais,
            sexe: this.sexe,
            anne_a: this.anne_a,
            anne_b: this.anne_b,
            avatar: this.avatar,
            AgentId: this.agent,
            TiteurId: this.titeur,
            CategorieId: this.categorie,
            ClasseId: this.classe
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read all
    static readall() {
        return eleveModels.findAll()
            .then((result) => result)
            .catch((error) => error);
    }

    //read id 
    static readId(id,res) {
        return new Promise((resolve, reject) => {
            eleveModels.findByPk(id,{include:categorieModels})
                    .then((response) => {
                        return resolve(response);
                    }).catch((error) => {
                        return reject(error);
                    });
            })
    }
}

module.exports = Eleve;
const agentsController = require('./../Controllers/agentController');

class Agent {
    constructor(matricule, pseudo, nom, prenom, password, avatar, role) {
        this.matricule = matricule;
        this.pseudo = pseudo;
        this.nom = nom;
        this.prenom = prenom;
        this.password = password;
        this.avatar = avatar;
        this.role = role;
    }

    //create
    create(res) {
        agentsController.create({
            matricule: this.matricule,
            pseudo: this.pseudo,
            nom: this.nom,
            prenom: this.prenom,
            password: this.password,
            avatar: this.avatar,
            role: this.avatar
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read id and matricule
    static readmatri(matricule) {
        return new Promise((resolve,reject)=>{
            agentsController.findAll({ where: { matricule: matricule } })
            .then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
        
    }
}

module.exports = Agent;
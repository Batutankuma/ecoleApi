const titeurController = require('./../Controllers/titeursController');

class Titeur {
    constructor(nom, prenom,telephone, password, avatar, adresse,agent) {
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.password = password;
        this.avatar = avatar;
        this.adresse = adresse;
        this.agent = agent
    }

    //create
    create(res) {
        titeurController.create({
            nom: this.nom,
            prenom: this.prenom,
            password: this.password,
            telephone:this.telephone,
            avatar: this.avatar,
            adresse : this.adresse,
            AgentId:this.agent
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read all
    static readall(){
        return titeurController.findAll()
        .then((response) => {
            return resolve(response);
        }).catch((error) => {
            return reject(error);
        });
    }

    //read id and matricule
    static readId(id) {
        return new Promise((resolve,reject)=>{
            titeurController.findAll({ where: { id: id} }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
    }
}

module.exports = Titeur;
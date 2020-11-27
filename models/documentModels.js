const documentModels= require('./../Controllers/documentController');

class Document {
    constructor(numero,nom,eleve,agent) {
        this.nom = nom;
        this.numero = numero;
        this.eleve = eleve;
        this.agent = agent;
    }

    //create
    create(res) {
        documentModels.create({
            nom: this.nom,
            numero:this.numero,
            EleveId:this.eleve,
            AgentId: this.agent,
        }).then((response) => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(400).json(error);
        });
    }

    //read all
    static readall(){
        return documentModels.findAll()
        .then((result)=> result)
        .catch((error)=> error);
    }

    //read id and matricule
    static readId(res, id) {
        documentModels.findAll({ where: { id: id} })
            .then((response) => {
                res.status(200).json(response);
            }).catch((error) => {
                res.status(400).json(error);
            });
    }
}

module.exports = Document;
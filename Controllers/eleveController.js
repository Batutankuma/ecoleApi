const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentController');
const Titeurcontrollers = require('./titeursController');
const Categoricontrollers = require('./categorieCategorie');
const Classcontrollers = require('./classeController');

const elevecontrollers = database.define('Eleve',{
    nom:{type:Sequelize.STRING},
    prenom:{type:Sequelize.STRING},
    data_naissance:{type:Sequelize.DATE},
    anne_a:{type:Sequelize.INTEGER},
    anne_b:{type:Sequelize.INTEGER},
    sexe:{type:Sequelize.STRING},
    avatar:{type:Sequelize.STRING},
});

Titeurcontrollers.hasMany(elevecontrollers);
Agentcontrollers.hasMany(elevecontrollers);
Categoricontrollers.hasMany(elevecontrollers);
Classcontrollers.hasMany(elevecontrollers);

elevecontrollers.belongsTo(Agentcontrollers);
elevecontrollers.belongsTo(Titeurcontrollers);
elevecontrollers.belongsTo(Categoricontrollers);
elevecontrollers.belongsTo(Classcontrollers);

module.exports = elevecontrollers;


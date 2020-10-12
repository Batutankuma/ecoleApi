const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Categoricontrollers = require('./categorieCategorie');
const Agentcontrollers = require('./agentController');

const fraiscontrollers = database.define('Frais',{
    titre:{type:Sequelize.STRING},
    montant:{type:Sequelize.INTEGER}
});

Categoricontrollers.hasOne(fraiscontrollers);
Agentcontrollers.hasOne(fraiscontrollers);

fraiscontrollers.belongsTo(Categoricontrollers);
fraiscontrollers.belongsTo(Agentcontrollers);

module.exports = fraiscontrollers;
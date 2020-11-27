const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentController');

const titeurcontrollers = database.define('Titeurs',{
    nom:{type:Sequelize.STRING},
    prenom:{type:Sequelize.STRING},
    telephone:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING},
    avatar:{type:Sequelize.TEXT},
});

Agentcontrollers.hasOne(titeurcontrollers);
titeurcontrollers.belongsTo(Agentcontrollers);

module.exports = titeurcontrollers;
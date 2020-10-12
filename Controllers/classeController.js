const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentController');

const classecontrollers = database.define('Classe',{
    nom:{type:Sequelize.STRING},
});

Agentcontrollers.hasMany(classecontrollers);
classecontrollers.belongsTo(Agentcontrollers);

module.exports = classecontrollers;
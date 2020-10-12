const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentController');

const categoriecontrollers = database.define('Categorie',{
    nom:{type:Sequelize.STRING},
    //admin
});

Agentcontrollers.hasMany(categoriecontrollers);
categoriecontrollers.belongsTo(Agentcontrollers);


module.exports = categoriecontrollers;
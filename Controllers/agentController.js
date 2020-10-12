const database = require('../config/database');
const Sequelize = require('sequelize');

const agentcontrollers = database.define('Agent',{
    matricule:{type:Sequelize.STRING,unique:true},
    pseudo:{type:Sequelize.STRING},
    nom:{type:Sequelize.STRING},
    prenom:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING},
    avatar:{type:Sequelize.TEXT},
    //role
});

module.exports = agentcontrollers;
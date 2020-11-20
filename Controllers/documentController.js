const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentController');
const Elevecontrollers = require('./eleveController');

const documentcontrollers = database.define('Document',{
    numero:{type:Sequelize.STRING,unique:true},
    nom:{type:Sequelize.STRING},
});

Agentcontrollers.hasMany(documentcontrollers);
Elevecontrollers.hasMany(documentcontrollers);

documentcontrollers.belongsTo(Agentcontrollers);
documentcontrollers.belongsTo(Elevecontrollers);

module.exports = documentcontrollers;
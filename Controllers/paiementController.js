const database = require('../config/database');
const Sequelize = require('sequelize');
//table externe
const Agentcontrollers = require('./agentcontroller');
const Titeurcontrollers = require('./titeurscontroller');
const Elevecontrollers = require('./elevecontroller');
const Fraiscontrollers = require('./fraiscontroller');

const paiementcontrollers = database.define('Paiment',{
    id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    montant:{type:Sequelize.INTEGER},
    montantRest:{type:Sequelize.INTEGER}
});

Agentcontrollers.hasMany(paiementcontrollers);
Titeurcontrollers.hasMany(paiementcontrollers);
Elevecontrollers.hasMany(paiementcontrollers);
Fraiscontrollers.hasMany(paiementcontrollers);

paiementcontrollers.belongsTo(Agentcontrollers);
paiementcontrollers.belongsTo(Fraiscontrollers);
paiementcontrollers.belongsTo(Elevecontrollers);
paiementcontrollers.belongsTo(Titeurcontrollers);



module.exports = paiementcontrollers;
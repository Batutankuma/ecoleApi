const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecolia','root','',{
    dialect:'mysql'
});

module.exports = sequelize;
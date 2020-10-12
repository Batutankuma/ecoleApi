const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Port = process.env.PORT || 3000;
const app = express();
const sms = require('./modules/smsenvoi');

//router
const AgentRouter = require('./routers/agentRouter');
const TiteurRouter = require('./routers/titeurRouter');
const ClasseRouter = require('./routers/classeRouter');
const CategorieRouter = require('./routers/categorieRouter');
const EleveRouter = require('./routers/eleveRouter');
const DocumentRouter = require('./routers/documentRouter');
const FraisRouter = require('./routers/fraisRouter');
const PaiementRouter = require('./routers/paiementRouter');

//midd
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


//database connect
const database = require('./config/database');
database.sync().then(() => {
    app.use('/api/v1/',AgentRouter,EleveRouter,ClasseRouter,CategorieRouter,TiteurRouter,DocumentRouter,
    FraisRouter,PaiementRouter
    );
    app.listen(Port, () => console.log(`Server started on port ${Port}`));
}).catch((error) => console.error('error starting database' +error ));
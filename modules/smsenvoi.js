const titeurModels = require('./../models/titeurModels');
const eleveModels = require('./../models/eleveModels');
const fraisModels = require('./../models/fraisModels');
const request = require('request');

async function messageA(titeur,frais,eleve,montant,montantrest,res) {
    var titeur = await titeurModels.readId(titeur);
    var fraiss = await fraisModels.readId(frais);
    var eleves = await eleveModels.readId(eleve);
    var montantRest = Math.abs(montantrest);
    var telephone = titeur[0].telephone.toString().replace("0","");
    telephone = "+243"+telephone;
    
    var message = "L'eleve:"+ eleves.nom+ " vient de payer "+montant+"$ pour le frais de "+fraiss.titre + " il vous reste le montant de "+ montantRest +"$";
    envoiSms(telephone, message, "GKrGB5Yx56dYFqNugBFZzGtHlTNb", res);
}


function envoiSms(receiver, messagee, token, res) {
    var receveirr = "tel:" + receiver;
    var sender = "tel:" + "+243842445372";
    var resultFile = token;
    var credentialss = "Bearer " + resultFile;
    var headers = {
        'Authorization': credentialss,
        'Content-Type': 'application/json'
    };
    var body = {
        outboundSMSMessageRequest: {
            address: receveirr,
            senderAddress: sender,
            outboundSMSTextMessage: {
                message: messagee
            }
        }
    };
    var options = {
        uri: 'https://api.orange.com/smsmessaging/v1/outbound/tel:+243842445372/requests',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            
        }
        else {
            
        }
    })
}
module.exports = messageA;
const eleveModels = require('./../models/eleveModels');
const fraisModels = require('./../models/fraisModels');
const PaiementModule = require('./../models/paiementModels');

async function paiementFrais(eleve, frais, montant,titeur,agent, res) {
    var fraiss = await fraisModels.readId(frais);
    var eleves = await eleveModels.readId(eleve);
    console.log("*********");
    console.log(eleves.CategorieId);
    console.log("*********");
    const montantPaie = parseInt(montant);
    var fraisCat =fraiss.Categorie.id;
    var eleveCat = eleves.CategorieId;

    if (fraisCat === eleveCat) {
        console.log("***1");
        if (montantPaie > fraiss.montant) {
            res.status(400).json('montant est superieur');
            console.log("****2");
        } else {
            const restMontant = montant - fraiss.montant;
            const paiement = new PaiementModule(montantPaie,frais,eleve,titeur,agent,restMontant);
            console.log("****3");
            paiement.create(res);
            
        }
    } else {
        res.send("nom");
    }
}

module.exports = paiementFrais;
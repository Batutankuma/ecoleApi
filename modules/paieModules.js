const eleveModels = require('./../models/eleveModels');
const fraisModels = require('./../models/fraisModels');
const PaiementModule = require('./../models/paiementModels');

async function paiementFrais(eleve, frais, montant,titeur,agent, res) {
    const eleves = await eleveModels.readId(eleve);
    const fraiss = await fraisModels.readId(frais);
    const montantPaie = montant;
    var fraisCat = fraiss.Categorie.CategorieId;
    var eleveCat = eleves.CategorieId;
    if (fraisCat === eleveCat) {
        if (montantPaie > fraiss.montant) {
            res.status(400).json('montant est superieur');
        } else {
            const restMontant = montant - fraiss.montant;
            const paiement = new PaiementModule(montantPaie,frais,eleve,titeur,agent,restMontant);
            paiement.create(res);
        }
    } else {
        res.send("nom");
    }
}

module.exports = paiementFrais;
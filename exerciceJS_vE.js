/*
Auteur:
Date:
*/
function getInfosFrance(){
  alert("Recupération de données");
  fetch('https://restcountries.com/v3.1/name/France')
    .then(reponse => {
        if (!reponse.ok) {
          //Vérifie si le code HTTP est différent des codes 200-299 (succès).
            throw new Error("Erreur : Pays introuvable.");
        }
        return reponse.json(); // Convertir la réponse en JSON
    })
    .then(donnees => {
        //data est un tableau de pays
        const pays = donnees[0]; // Premier résultat du tableau
        console.log("Données: ", donnees);
        //pays contient plusieurs propriétés
        console.log("Nom :", pays.name.common);
        console.log("Capitale :", pays.capital[0]); //tableau
        console.log("Population :", pays.population);
        console.log("Région :", pays.region);
        console.log("Drapeau :", pays.flags.svg);
    })
    .catch(erreur => console.error(erreur.message));
}

getInfosFrance();


function changerImage() {
    alert("Fonction changerImage");
  }
function ajusterOpacite() {
    alert("Fonction ajusterOpacite");
}
function gererTache(action, indice) {
  alert("Fonction gererTache");
}
function mettreAJourResume() {
  alert("Fonction mettreAJourResume");
}

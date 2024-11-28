/*
Auteur: Lesueur Romain
Date: 28/11/2024
*/


// Fonction pour récupérer les informations d'un pays
function getInfosPays() {
  // Récupération du nom du pays à partir du formulaire
  const nomPays = document.getElementById('nomPays').value;
  const resultatElement = document.getElementById('resultatPays');

  // Vérifier si le champ est vide
  if (!nomPays) {
      alert("Veuillez entrer le nom d'un pays.");
      return;
  }

  // Appel API pour récupérer les données
  fetch(`https://restcountries.com/v3.1/name/${nomPays}`)
      .then(reponse => {
          if (!reponse.ok) {
              throw new Error("Erreur : Pays introuvable.");
          }
          return reponse.json();
      })
      .then(donnees => {
          const pays = donnees[0]; // Récupérer le premier résultat
          console.log("Données récupérées :", pays);

          // Affichage des informations dans le paragraphe résultatPays
          resultatElement.innerHTML = `
              <strong>Nom :</strong> ${pays.name.common} <br>
              <strong>Capitale :</strong> ${pays.capital ? pays.capital[0] : "N/A"} <br>
              <strong>Région :</strong> ${pays.region} <br>
              <strong>Population :</strong> ${pays.population.toLocaleString()} <br>
              <img src="${pays.flags.svg}" alt="Drapeau de ${pays.name.common}" width="150">
          `;

          // Application des styles en fonction de la région
          if (pays.region === "Europe") {
              resultatElement.style.color = "blue";
              resultatElement.style.fontStyle = "italic";
          } else if (pays.region === "Asia") {
              resultatElement.style.color = "green";
              resultatElement.style.fontWeight = "bold";
          } else {
              resultatElement.style.color = "red";
              resultatElement.style.textDecoration = "underline";
          }
      })
      .catch(erreur => {
          resultatElement.innerHTML = `<span style="color: red;">${erreur.message}</span>`;
          console.error(erreur.message);
      });
}

// Ajout d'un événement au bouton "Rechercher"
document.querySelector('#formPays button').addEventListener('click', getInfosPays);

// Variable globale pour gérer l'état de l'image
let isJour = true; // Définit si l'image est en mode "jour"
let currentOpacity = 1; // Opacité initiale de l'image (100 %)

// Fonction pour changer l'image entre "jour" et "nuit"
function changerImage() {
  const image = document.getElementById('monImage'); // Sélectionne l'image
  if (isJour) {
    image.src = "images/nuit.jpg"; // Change l'image en "nuit"
    image.alt = "Marrakech en nuit"; // Met à jour l'attribut alt
  } else {
    image.src = "images/jour.jpg"; // Change l'image en "jour"
    image.alt = "Marrakech en jour"; // Met à jour l'attribut alt
  }
  isJour = !isJour; // Alterne l'état de l'image
}

// Fonction pour ajuster l'opacité
function ajusterOpacite() {
  const image = document.getElementById('monImage'); // Sélectionne l'image
  currentOpacity -= 0.25; // Réduit l'opacité par paliers de 25 %
  if (currentOpacity < 0.25) {
    currentOpacity = 1; // Réinitialise l'opacité à 100 % si elle atteint 25 %
  }
  image.style.opacity = currentOpacity; // Applique la nouvelle opacité
}

// Ajouter des gestionnaires d'événements aux boutons
document.addEventListener('DOMContentLoaded', () => {
  // Bouton "Changer d'image"
  const btnChangerImage = document.getElementById('changerImage');
  btnChangerImage.addEventListener('click', changerImage);

  // Bouton "Ajuster Opacité"
  const btnAjusterOpacite = document.getElementById('ajusterOpacite');
  btnAjusterOpacite.addEventListener('click', ajusterOpacite);
});

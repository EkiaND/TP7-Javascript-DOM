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


getInfosFrance();

// Variable globale pour gérer l'état de l'image
let isJour = true;
let currentOpacity = 1; // Opacité initiale (100 %)

// Fonction pour changer d'image
function changerImage() {
  const image = document.getElementById('monImage');
  if (isJour) {
      image.src = "images/nuit.jpg";
      image.alt = "Marrakech en nuit";
  } else {
      image.src = "images/jour.jpg";
      image.alt = "Marrakech en jour";
  }
  isJour = !isJour; // Alterner entre jour et nuit
}

document.querySelector('button:nth-of-type(1)').addEventListener('click', changerImage);

// Fonction pour ajuster l'opacité
function ajusterOpacite() {
  const image = document.getElementById('monImage');
  currentOpacity -= 0.25; // Réduire l'opacité par paliers de 25 %
  if (currentOpacity < 0.25) {
      currentOpacity = 1; // Réinitialiser à 100 % si elle atteint 25 %
  }
  image.style.opacity = currentOpacity;
}

document.querySelector('button:nth-of-type(2)').addEventListener('click', ajusterOpacite);

function gererTache(action, indice) {
  const tache = document.querySelectorAll('ul li')[indice];
  if (action === 'clic') {
      // Passer la tâche à "Terminée"
      tache.style.backgroundColor = "green";
      tache.style.textDecoration = "line-through";
      tache.querySelector('.status').textContent = "Terminée";
  } else if (action === 'doubleClic') {
      // Repasser la tâche à "En cours"
      tache.style.backgroundColor = "yellow";
      tache.style.textDecoration = "none";
      tache.querySelector('.status').textContent = "En cours";
  }
  mettreAJourResume(); // Mettre à jour le résumé
}



// Fonction pour mettre à jour le résumé des tâches
function mettreAJourResume() {
  const taches = document.querySelectorAll('ul li');
  let terminees = 0;
  let enCours = 0;

  taches.forEach(tache => {
      const status = tache.querySelector('.status').textContent;
      if (status === "Terminée") {
          terminees++;
      } else {
          enCours++;
      }
  });

  const resume = document.getElementById('resume');
  resume.textContent = `Tâches terminées : ${terminees} | Tâches en cours : ${enCours}`;
}

// Ajout des gestionnaires d'événements pour chaque tâche
document.querySelectorAll('ul li').forEach((tache, indice) => {
  tache.addEventListener('click', () => gererTache('clic', indice));
  tache.addEventListener('dblclick', () => gererTache('doubleClic', indice));
});
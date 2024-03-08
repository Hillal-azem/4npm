// callbacks solution exercice

import axios from "axios";

// Fonction pour récupérer les utilisateurs depuis l'API JSONPlaceholder
function getUsers(callback) {
  // URL de l'API JSONPlaceholder pour récupérer les utilisateurs
  const url = "https://jsonplaceholder.typicode.com/users";

  // Effectuer une requête GET à l'URL de l'API JSONPlaceholder
  axios
    .get(url)
    .then((response) => {
      // Appeler le callback avec les données des utilisateurs
      callback(null, response.data);
    })
    .catch((error) => {
      // En cas d'erreur, appeler le callback avec l'erreur
      callback(error, null);
    });
}

// Utilisation de la fonction recupererUtilisateurs avec un callback
getUsers((erreur, utilisateurs) => {
  if (erreur) {
    console.error("Erreur lors de la récupération des utilisateurs :", erreur);
  } else {
    console.log("Utilisateurs récupérés avec succès :", utilisateurs);
  }
});

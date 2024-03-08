import axios from "axios";

// Fonction pour récupérer les utilisateurs depuis l'API JSONPlaceholder
function getUsers(calback) {
  const url = "https://jsonplaceholder.typicode.com/users";

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        // Appeler le callback avec les données des utilisateurs
        resolve(response.data);
      })
      .catch((error) => {
        // En cas d'erreur, appeler le callback avec l'erreur
        reject(error);
      });
  });
}

/* getUsers()
  .then((data) => {
    console.log("Utilisateurs récupérés avec succès :", data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }); */

async function getUserAsyncAwait() {
  try {
    const result = await getUsers();
    console.log("Utilisateurs récupérés avec succès :", result);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
}

getUserAsyncAwait();

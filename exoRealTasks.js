import { createInterface } from "readline";
import fs from "fs";

// Fonction pour poser une question à l'utilisateur de manière asynchrone
function questionAsync(message) {
  return new Promise((resolve, reject) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Exemple d'utilisation avec async/await pour attendre la réponse de l'utilisateur
async function main() {
  try {
    const name = await questionAsync("Quel est votre nom ? ");
    const number = await questionAsync("choissisez un nombre entre 1 et 10");
    console.log(`Bonjour, ${name} ${number}!`);
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// Chemin vers le fichier JSON
const cheminFichier = "data.json";

// Nouvelle entrée à ajouter au tableau
const nouvelleEntree = { id: 1, nom: "Nouvelle Entrée" };

// Lire le contenu du fichier JSON
fs.readFile(cheminFichier, "utf-8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier:", err);
    return;
  }

  // Convertir le contenu du fichier en tableau
  const tableau = JSON.parse(data);

  // Ajouter la nouvelle entrée au tableau
  tableau.push(nouvelleEntree);

  // Convertir le tableau en format JSON
  const tableauJSON = JSON.stringify(tableau);

  // Écrire le nouveau contenu dans le fichier
  fs.writeFile(cheminFichier, tableauJSON, (err) => {
    if (err) {
      console.error("Erreur d'écriture dans le fichier:", err);
      return;
    }

    console.log("Le fichier a été mis à jour avec succès!");
  });
});

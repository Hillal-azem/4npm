import fs from "fs";

// Chemin vers le fichier JSON
const filePath = "data.json";

// Lecture du contenu du fichier JSON
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier :", err);
    return;
  }

  try {
    // Analyse du contenu JSON en tant qu'objet JavaScript
    const jsonData = JSON.parse(data);

    // Parcours des objets du tableau avec une boucle forEach
    jsonData.forEach((objet, index) => {
      console.log(`Objet ${index + 1} :`, objet);
      // Vous pouvez accéder aux propriétés de chaque objet ici
    });
  } catch (error) {
    console.error("Erreur lors de l'analyse du JSON :", error);
  }
});

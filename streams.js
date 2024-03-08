import fs from "fs";

// Création d'un stream de lecture à partir d'un fichier source
let readableStream = fs.createReadStream("input.txt");

// Création d'un stream d'écriture vers un fichier de destination
const writableStream = fs.createWriteStream("output.txt");

// Piping : Lecture du fichier source et écriture dans le fichier destination
//readableStream.pipe(writableStream);

readableStream = fs.createReadStream("input.txt", { highWaterMark: 5 });

readableStream.on("data", (chunk) => {
  console.log(chunk);
  console.log("Lecture d'un morceau de données...", chunk.toString());
});

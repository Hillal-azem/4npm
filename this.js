// illustre l'utilisation de this dans les fonctions régulières, fléchées et nommées, ainsi que l'utilisation de bind pour définir le contexte.

const obj = {
  name: "Objet",
  regularFunction: function () {
    console.log("Dans une fonction régulière, this pointe vers :", this);
  },
  arrowFunction: () => {
    console.log("Dans une fonction fléchée, this pointe vers :", this);
  },
  namedFunction: function namedFunction() {
    console.log("Dans une fonction nommée, this pointe vers :", this);
  },
};

// Appeler les fonctions sur l'objet d'origine
console.log("Sur l'objet d'origine :");
obj.regularFunction(); // this pointe vers l'objet d'origine
obj.arrowFunction(); // this pointe vers le contexte global (module Node.js)
obj.namedFunction(); // this pointe vers l'objet d'origine

// Assigner les fonctions à de nouvelles variables
const regularFunc = obj.regularFunction;
const arrowFunc = obj.arrowFunction;
const namedFunc = obj.namedFunction;

// Appeler les fonctions à partir de nouvelles variables
console.log("À partir de nouvelles variables :");
regularFunc(); // this pointe vers le contexte undefined
arrowFunc(); // this pointe vers le contexte undefined
namedFunc(); // this pointe vers le contexte undefined

// Créer un nouvel objet pour illustrer les différents contextes
const newObj = {
  name: "Nouvel Objet",
};

// Utiliser bind pour définir le contexte
console.log("Utiliser bind pour définir le contexte :");
const boundFunc = obj.regularFunction.bind(newObj);
boundFunc(); // this pointe vers le nouvel objet

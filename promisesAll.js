const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "Première promesse réussie")
);
const promise3 = new Promise((resolve, reject) =>
  // données issues de promesse 2 ??
  promise2
    .then((value) => {
      console.log("résultat de la promesse 2: ", value);
      setTimeout(resolve, 200, "Troisième promise réussie", value);
    })
    .catch((error) => {
      console.error("erreur lors de la promesse 2: ", error);
    })
);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // Affiche "Une erreur est survenue"
  });

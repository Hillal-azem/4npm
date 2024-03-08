// Classe Database avec l'implémentation du pattern Singleton
class Database {
  isConnected = false;

  constructor() {
    if (!Database.instance) {
      // Simulation de la connexion à la base de données
      console.log("Connexion à la base de données...");

      // Code de connexion ici
      this.connect();

      // Stockage de l'instance unique de la base de données
      Database.instance = this;
    } else {
      console.log("Connexion déjà ouverte !");
    }

    return Database.instance;
  }

  // Méthode pour se connecter à la base de données
  connect() {
    // Simulation de la connexion à la base de données
    this.isConnected = true;
  }

  // Méthode pour se déconnecter de la base de données
  disconnect() {
    // Simulation de la déconnexion de la base de données
    console.log("Déconnexion de la base de données...");

    // Code de déconnexion ici

    this.isConnected = false;
    console.log("Déconnexion réussie !");
  }

  fetch() {
    console.log("Exécution de la requête...");
  }
}

// Exemple d'utilisation

// Créer une instance de la base de données
const databaseInstance1 = new Database();
databaseInstance1.fetch();

// Tentative de création d'une deuxième instance
const databaseInstance2 = new Database();
databaseInstance2.fetch();

// Vérifier si les instances sont les mêmes
console.log(databaseInstance1 === databaseInstance2); // true

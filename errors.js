// Exemple d'utilisation des erreurs personnalisées

// Classe de base pour les erreurs personnalisées
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    //Error.captureStackTrace(this, this.constructor);
  }
}

// Classe d'erreur spécifique pour les erreurs liées à la validation
class ValidationError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

// Classe d'erreur spécifique pour les erreurs liées à l'authentification
class AuthenticationError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

// Classe d'erreur spécifique pour les erreurs liées à l'autorisation
class AuthorizationError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

// Exemple d'utilisation
function validateEmail(email) {
  if (!email || !email.includes("@")) {
    throw new ValidationError("L'adresse e-mail n'est pas valide.");
  }
}

function loginUser(username, password) {
  if (username !== "user" || password !== "password") {
    throw new AuthenticationError(
      "Nom d'utilisateur ou mot de passe incorrect."
    );
  }
}

// Gestion des erreurs
try {
  validateEmail("invalidemail.com");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Erreur de validation:", error.message);
  } else {
    throw error;
  }
}

try {
  loginUser("admin", "123456");
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error("Erreur d'authentification:", error.message);
  } else {
    throw error;
  }
}

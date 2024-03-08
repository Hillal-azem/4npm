function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: userId, username: "user" });
    }, 1000);
  });
}

function getUserFriends(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Erreur lors de la récupération des amis");
      //resolve(["friend1", "friend2", "friend3"]);
    }, 1000);
  });
}

function getFriendDetails(friendId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: friendId, name: "Friend " + friendId });
    }, 1000);
  });
}

// Utilisation de Promises pour gérer les opérations asynchrones
getUserData("123")
  .then((user) => {
    console.log(user);
    return getUserFriends(user.userId);
  })

  .then((friends) => {
    console.log("friends", friends);
    return getFriendDetails(friends[0]);
  })

  .then((friend) => {
    console.log(friend);
    // Suite des opérations...
  })
  .catch((error) => {
    console.error("error", error);
  });

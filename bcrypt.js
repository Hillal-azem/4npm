import bcrypt from "bcrypt";

const password = "123456";
const rounds = 10;

bcrypt.genSalt(rounds, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log("hash is : ", hash);

    bcrypt.compare(password, hash, (err, res) => {
      // will return true if the password is correct
      console.log("password is correct ? : ", res);
    });
  });
});

import jwt from "jsonwebtoken";
import fs from "fs";

const privateKey = fs.readFileSync("private.key", "utf8");
const publicKey = fs.readFileSync("public.key", "utf8");
const payload = { id: 1, name: "John Doe" };

jwt.sign(payload, privateKey, { algorithm: "RS256" }, (err, token) => {
  console.log("token", token);
  jwt.verify(token, publicKey, (err, decoded) => {
    console.log(decoded);
  });
});

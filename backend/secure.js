const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//Vérification de la validité d'un jeton
function jwtCheck(req, res, next) {
  const idToken = req.headers.authorization;
  jwt.verify(idToken, process.env.JWT_PUBLIC_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send("Accès non autorisé. Merci de vous loguer!");
    } else {
      req.userToken = decoded;
      next();
    }
  });
}

//Création d'un jeton
const jwtSign = (data) =>
  jwt.sign(
    typeof data === "object" ? data.toJSON() : data,
    process.env.JWT_PRIVATE_KEY,
    {
      algorithm: "RS256",
    },
    { expiresIn: +process.env.JWT_EXPIRATION }
  );

module.exports = {
  jwtCheck,
  jwtSign,
};

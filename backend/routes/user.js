const express = require("express");
const Users = require("../controllers/user");
const { jwtCheck } = require("../secure"); //Securisation des routes
const router = express.Router();

module.exports = router;

/***************************************/
router.get("/", Users.get_users); // Liste des utilisateurs
router.get("/:val", Users.get_user); // Recherche d’un utilisateur
router.get("/notes/:val", Users.get_user_notes); // Liste des notes d’un auteur
router.post("/", Users.insert_user); // creation utilisateur
router.post("/auth", Users.auth_user); //authentification
/***************************************/
router.use((req, res) => {
  res.status(404);
  res.json({
    error: `${req.method + ":" + req.originalUrl} Page not found`,
  });
});

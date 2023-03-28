const express = require("express");
const Users = require("../controllers/user");
const { jwtCheck } = require("../secure"); //Securisation des routes
const router = express.Router();

module.exports = router;

/***************************************/
router.post("/", Users.insert_user); // creation utilisateur
router.post("/auth", Users.auth_user); //authentification
/***************************************/
router.use((req, res) => {
  res.status(404);
  res.json({
    error: `${req.method + ":" + req.originalUrl} Page not found`,
  });
});

const express = require("express");
const Notes = require("../controllers/note");
const { jwtCheck } = require("../secure"); //Securisation des routes
const router = express.Router();

module.exports = router;

/***************************************/
router.get("/", Notes.get_notes); // Liste de toutes les notes triées par title
router.get("/:val", Notes.get_note); // Détail d‘une note à partir de son _id ou son title
router.get("/author/:val", Notes.get_notes_by_author); // Liste des notes d’un auteur à partir de son _id
router.post("/:val", Notes.insert_note); // Mise à jour d’une note (title et/ou content )
router.patch("/:val", Notes.update_note); //Suppression de la note à partir de son _id
/***************************************/
router.use((req, res) => {
    res.status(404);
    res.json({
        error: `${req.method + ":" + req.originalUrl} Page not found`,
    });
});

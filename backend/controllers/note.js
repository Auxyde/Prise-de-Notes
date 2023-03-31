const { connectDB, closeDB } = require("../db/conn");
const Note = require("../models/Note");
const User = require("../models/User");
const { jwtSign } = require("../secure");
const { get_user } = require("./user");

//Liste de toutes les notes
// triées par title
const get_notes = function (req, res) {
    connectDB((cnx) => {
        Note.find()
            .sort({ title: 1 })
            .then((data) => {
                closeDB();
                res.status(200).json(data);
            })
            .catch((err) => {
                closeDB();
                res.status(204).json(err);
            });
    });
}

// Détail d‘une note à partir de
// son _id ou son title
const get_note = function (req, res) {
    const val = req.params.val;
    const query = {}

    if (val.match(/^[0-9a-fA-F]{24}$/)) {
        query._id = val;
    }
    else {
        query.title = new RegExp(val, "i");
    }

    connectDB((cnx) => {
        Note.findOne(query)
            .then((data) => {
                console.log(data);
                closeDB();
                res.status(200).json(data);
            })
            .catch((err) => {
                console.log(err);
                closeDB();
                res.status(204).json(err);
            });
    });
}

// Liste des notes d’un auteur à
// partir de son _id
// Si le nom ou le prénom de l'auteur correspond à l'id de l'utilisateur ou que c'est son mail
// Ou si c'est directement son id
const get_notes_by_author = function (req, res) {
    const User = require("../models/User");
    const val = req.params.val;
    let user = {};

    //Cherche l'utilisateur correspondant à l'id
    connectDB((cnx) => {
        User.find({_id : val})
            .then((data) => {
                user = data;
                closeDB();
            })
            .catch((err) => {
                console.log(err);
                closeDB();
                res.status(204).json(err);
            })
    })

    //Cherche les notes correspondant à l'utilisateur en fonction de soi son nom, prénom ou mail ou son id
    connectDB((cnx) => {
        Note.find({$or: [{author : user.name}, {author : user.firstname}, {author : user.mail}, {author : user._id}]})
            .then((data) => {
                console.log(data);
                closeDB();
                res.status(200).json(data);
            })
            .catch((err) => {
                console.log(err);
                closeDB();
                res.status(204).json(err);
            });

    })

}
const insert_note = function (req, res) {
    try {
        connectDB((cnx) => {
            User.findOne({ mail: req.body.author })
                .then((user) => {
                    if (!user) {
                        // Si l'utilisateur n'est pas trouvé, on retourne une erreur
                        return res.status(400).json({ message: "Author email not found" });
                    }

                    // Si l'utilisateur est trouvé, on crée une nouvelle note
                    const newNote = new Note({
                        title: req.body.title,
                        content: req.body.content,
                        author: req.body.author,
                    });

                    // Enregistrez la nouvelle note dans la base de données
                    newNote.save()
                        .then((result) => {
                            console.log(result.id);
                            res.status(201).json(result);
                            closeDB();
                        })
                        .catch((err) => {
                            console.log(err);
                            closeDB();
                            res.status(500).json(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                    closeDB();
                    res.status(500).json(err);
                });
        });
    } catch (error) {
        res.status(204).json(error);
    }
}

const update_note = function (req, res) {
    try {
        const {id} = req.params;
        const {title, content} = req.body;

        connectDB((cnx) => {
            Note.findByIdAndUpdate(
                id,
                {title, content},
                {new: true}
            )
                .then((note) => {
                    if (!note) {
                        let obj = {
                            success: false,
                            message: "La note n'existe pas",
                        };
                        res.status(404).json(obj);
                    } else {
                        res.status(200).json(note);
                    }
                })
                .catch((err) => {
                    let obj = {
                        success: false,
                        message: err.message,
                    };
                    res.status(500).json(obj);
                })
                .finally(() => closeDB());
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const delete_note = function (req, res) {
    const { id } = req.params;
    console.log(id);

    connectDB((cnx) => {
        Note.findByIdAndDelete(id)
            .then((result) => {
                if (!result) {
                    res.status(404).json({ success: false, message: "Note introuvable" });
                } else {
                    res.status(200).json({ success: true, message: "La note a été supprimée" });
                }
            })
            .catch((err) => {
                closeDB();
                res.status(500).json({ success: false, message: "Erreur lors de la suppression de la note" });
            });
    });

};


module.exports = {
    get_notes,
    get_note,
    get_notes_by_author,
    insert_note,
    update_note,
    delete_note,
};

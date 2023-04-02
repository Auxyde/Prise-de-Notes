const { connectDB, closeDB } = require("../db/conn");
const User = require("../models/User");
const { jwtSign } = require("../secure");
const Note = require("../models/Note");

const insert_user = function (req, res) {
  try {
    const newUser = new User(req.body);

    connectDB((cnx) => {
      User.findOne({ mail: req.body.mail })
        .then((user) => {
          if (!user) {
            newUser
              .save({ new: true })
              .then((data) => {
                let obj = {
                  success: true,
                  message: "Utilisateur enregistré avec succès",
                };
                res.status(201).json(obj);
              })
              .catch((err) => {
                let obj = {
                  success: false,
                  message: err.message,
                };
                res.status(401).json(obj);
              });
          } else {
            let obj = {
              success: true,
              docExists: true,
              message: "Un compte existe déjà avec cette adresse mail!",
            };
            res.status(409).json(obj);
          }
        })
        .catch((err) => {
          res.status(204).json(err);
        });
    });
  } catch (error) {
    res.status(204).json(error);
  }
};

//Authentification par mail,&& mdp
const auth_user = (req, res) => {
  connectDB((cnx) => {
    const { mail, password } = req.body;
    const nameRegex = new RegExp(mail, "i");
    User.findOne({ mail: nameRegex })
      .then((result) => {
        if (!result) reject();
        //Verif du mot de passe
        else
          result
            .comparePassword(password)
            .then((response) => {
              closeDB();
              if (!response) throw response;

              //On supprime le mdp
              const { password, ...wResult } = result._doc;
              wResult.accessToken = jwtSign(wResult.mail);
              res.status(200).json(wResult);
            })
            .catch((err) => {
              console.log(err);
              closeDB();
              res.status(204).json(err);
            });
      })
      .catch((err) => {
        res.status(204).json(err);
      });
  });
};

// Liste des utilisateurs
// (_id,name, firstname,mail)
const get_users = (req, res) =>{
    connectDB((cnx) => {
        User.find()
            .then((result) => {
                closeDB();
                console.log(result);
                res.status(200).json(result);
            })
            .catch((err) => {
                closeDB();
                console.log("Crashed")
                res.status(204).json(err);
            });
    });
};

// Recherche d’un utilisateur à
// partir de son : _id, name,
// firstname ou mail

// Dans notre cas, on ira du plus précis au moins précis, donc dans un premier temps _id et mail, puis name et firstname
// On pourra éventuellement combiner firstname et name pour une recherche plus précise
const get_user = (req, res) => {
    const searchParams = req.params.val;
    let columns = ["mail", "name", "firstname"];
    if(searchParams.length == 24) columns.push("_id")
    let query = {$or : []};
    columns.forEach((col) => {
        let obj = {};
        obj[col] =  searchParams;
        query.$or.push(obj);
    });


    console.log( query);
    connectDB((cnx) => {
        User.find(query)
            .then((result) => {
                console.log(result);
                res.status(200).json(result);
                closeDB();
            })
            .catch((err) => {
                console.log(err);
                closeDB();
                res.status(204).json(err);

            });
    })
};

//Liste des notes d’un auteur
// (_id)
const get_user_notes = (req, res) => {
    id = req.params.id;
    let {name, firstname, mail} = "";

    const Note = require("../models/Note");

    // On va chercher le nom, le prénom, et le mail de l'utilisateur
    connectDB((cnx) => {
        User.find({_id: id})
            .then((result) => {
                if (!result) {
                    res.status(404).json({ success: false, message: "Utilisateur introuvable" });
                } else {
                    result.name ? name = result.name : null
                    result.firstname ? firstname = result.firstname : null
                    result.mail ? mail = result.mail : null

                    Note.find({$or: [{author: id}, {author: mail}, {author: name}, {author: firstname}]})
                        .then((result) => {
                            closeDB();
                            res.status(200).json(result);
                        })
                        .catch((err) => {
                            closeDB();
                            res.status(204).json(err);
                        })
                }
            }
            )
            .catch((err) => {
                closeDB();
                res.status(500).json(err);
            })
    });

};

//Modification utilisateur
const update_user = (req, res) => {
    try {
        const { name, firstname, password } = req.body;
        const { id } = req.params;

        connectDB((cnx) => {
            User.findByIdAndUpdate(
                id,
                { name, firstname, password },
                { new: true }
            )
                .then((user) => {
                    if (!user) {
                        let obj = {
                            success: false,
                            message: "L'utilisateur n'existe pas",
                        };
                        res.status(404).json(obj);
                    } else {
                        //On supprime le mdp
                        const { password, ...wResult } = user._doc;
                        wResult.accessToken = jwtSign(wResult.mail);
                        res.status(200).json(wResult);
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
};

//Suppression utilisateur
const delete_user = (req, res) =>{
    const { id } = req.params;

    connectDB((cnx) => {
        User.findByIdAndDelete(id)
            .then((result) => {
                closeDB();
                if (!result) {
                    res.status(404).json({ success: false, message: "Utilisateur introuvable" });
                } else {
                    res.status(200).json({ success: true, message: "Utilisateur supprimé avec succès" });
                }
            })
            .catch((err) => {
                closeDB();
                res.status(500).json({ success: false, message: "Erreur lors de la suppression de l'utilisateur" });
            });
    });
};


module.exports = {
    insert_user,
    auth_user,
    get_users,
    get_user,
    get_user_notes,
    update_user,
    delete_user
};

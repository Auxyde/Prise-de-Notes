const { connectDB, closeDB } = require("../db/conn");
const User = require("../models/User");
const { jwtSign } = require("../secure");

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
    //TODO
};

module.exports = {
    insert_user,
    auth_user,
    get_users,
    get_user,
    get_user_notes,
};

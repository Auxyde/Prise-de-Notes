const { connectDB, closeDB } = require("../db/conn");
const Note = require("../models/Note");
const { jwtSign } = require("../secure");

//Liste de toutes les notes
// triées par title
const get_notes = function (req, res) {
    connectDB((cnx) => {
        Note.find()
            .sort({ title: 1 })
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

const get_note = function (req, res) {
    //TODO
}

const get_notes_by_author = function (req, res) {
    //TODO
}
const insert_note = function (req, res) {
    //TODO
}

const update_note = function (req, res) {
    //TODO
}

const delete_note = function (req, res) {
    //TODO
}

module.exports = {
    get_notes,
    get_note,
    get_notes_by_author,
    insert_note,
    update_note,
    delete_note,
};

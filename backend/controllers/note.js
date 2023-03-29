const { connectDB, closeDB } = require("../db/conn");
const Note = require("../models/Note");
const { jwtSign } = require("../secure");

const get_notes = function (req, res) {
    //TODO
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

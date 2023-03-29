const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: String, required: [true, "Auteur obligatoire"] },
});

NoteSchema.pre("save", function (next) {
    const note = this;
    next();
});

NoteSchema.pre("findOneAndUpdate", function (next) {
    const note = this;
    const update = note.getUpdate().$set;
    note.setUpdate(update);
    next();
});

/* Liaison du model à la collection */
module.exports = mongoose.model("notes", NoteSchema);

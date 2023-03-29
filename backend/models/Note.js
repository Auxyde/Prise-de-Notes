const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: String, required: [true, "Auteur obligatoire"] },
});

NoteSchema.pre("save", function (next) {
    const note = this;
});

NoteSchema.pre("findOneAndUpdate", function (next) {
    const note = this;
    const update = note.getUpdate().$set;
}
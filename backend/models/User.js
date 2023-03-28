const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

/* Description du schema du document */
const UserSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  mail: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `@mail invalide`,
    ],
    required: [true, "Mail obligatoire"],
    index: { unique: true },
  },
  password: { type: String, required: [true, "Mot de passe obligatoire"] },
});

UserSchema.pre("save", function (next) {
  const user = this;
  // on hash si nouveau ou modifié
  if (user.isModified("password")) {
    setHash(user.password, next, (hash) => {
      user.password = hash;
      next();
    });
  } else return next();
});

UserSchema.pre("findOneAndUpdate", function (next) {
  const user = this;
  const update = user.getUpdate().$set;
  if (update.password) {
    setHash(update.password, next, (hash) => {
      update.password = hash;
      user.setUpdate(update);
      next();
    });
  } else return next();
});

function setHash(password, next, cb) {
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
      return cb(hash);
    });
  });
}

//Comparaison du mot de passe saisi à celui qui est stocké
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/* Liaison du model à la collection */
module.exports = mongoose.model("users", UserSchema);

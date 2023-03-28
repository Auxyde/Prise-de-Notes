// Import de mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//Préparation de la connexion
let dbConnection = null;
const connectDB = async function (callback) {
  if (!dbConnection)
    mongoose
      .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
      .then((db) => {
        dbConnection = mongoose.connection;
        callback(dbConnection);
      })
      .catch((err) => console.log("Erreur de connexion!", err));
  else return callback(dbConnection);
};

const closeDB = () => {
  dbConnection?.close();
  dbConnection = null;
};
module.exports = { connectDB, closeDB };

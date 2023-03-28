const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const morgan = require("morgan");
const cors = require("cors");

var app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

app.use(morgan("combined")); //Gestion du log

//On n'active le multi origine qu'à distance
const corsOptionsDelegate = (req, callback) => {
  const corsOptions =
    req.header("Host").indexOf("localhost") != -1
      ? {}
      : { origin: ["*", "*", "*"], optionsSuccessStatus: 200 };
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// --------------------
app.listen(port, function () {
  console.log(`Serveur démarré sur le port ${port} !`);
});

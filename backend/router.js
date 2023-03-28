const express = require("express");
const router = express.Router();
router.use(["/user", "/users"], require("./routes/user"));
module.exports = router;

/***************************************/
router.use((req, res) => {
  res.status(404);
  res.json({
    error: `${req.method + ":" + req.originalUrl} Page not found`,
  });
});

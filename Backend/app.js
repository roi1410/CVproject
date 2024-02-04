const express = require("express");
const app = express();
const routerCreator = require("./routes/Routes");
module.exports = app;
app.use(express.json());
const cors = require("cors");
app.use(cors());



app.get("/", (req, res) => {
  res.send("Hi");
});



// need to setup rout shit
app.use("/api/Cv", routerCreator);

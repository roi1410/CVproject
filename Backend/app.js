const express = require("express");
const app = express();
const routerCreator = require("./routes/usersRoutes");
module.exports = app;
app.use(express.json());
const cors = require("cors");
app.use(cors());

// need to setup rout shit
app.use("/users", routerCreator);

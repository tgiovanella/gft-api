const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

require("../routers/checkinRoutes")(app);

module.exports = app;

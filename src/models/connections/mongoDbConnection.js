const mongoose = require("mongoose");
require("dotenv-safe").config();

const connection = mongoose.connect(process.env.MONGO_CONNECT);

module.exports = connection;

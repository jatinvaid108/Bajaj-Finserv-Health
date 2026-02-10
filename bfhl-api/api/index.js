require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bfhlRoute = require("../src/routes/bfhl");
const healthRoute = require("../src/routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoute);
app.use("/health", healthRoute);

module.exports = app;

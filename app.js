const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Hola Mundo desde CI/CD con GitHub 🚀");
});

module.exports = app;

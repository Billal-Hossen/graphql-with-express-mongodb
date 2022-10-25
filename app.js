const express = require('express');

const app = express();

app.get("/", (req, res) => {

  res.send("Route is working! YaY")

});

module.exports = app;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./graphql/schema")
const app = express();

const authenticate = require("./middlewares/authenticate")

app.use(authenticate)

app.get("/", (req, res) => {
  res.send("Route is working! YaY")
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}))

module.exports = app;
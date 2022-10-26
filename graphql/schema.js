const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users } = require("./queries");
const { signUp, logIn } = require("./mutations");
const QueryTypes = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users }
});
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: { signUp, logIn }
})

module.exports = new GraphQLSchema({
  query: QueryTypes,
  mutation: MutationType
})
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users, user, posts, post } = require("./queries");
const { signUp, logIn, addPost } = require("./mutations");
const QueryTypes = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users, user, posts, post }
});
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: { signUp, logIn, addPost }
})

module.exports = new GraphQLSchema({
  query: QueryTypes,
  mutation: MutationType
})
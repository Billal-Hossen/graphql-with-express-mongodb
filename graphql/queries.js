const { GraphQLList } = require("graphql")
const { User } = require("../models")
const { UserType } = require("./types")

const users = {
  type: new GraphQLList(UserType),
  description: "Retrieves list of users",
  resolve(parent, args) {
    return User.find()
  },
}

module.exports = { users }
const { GraphQLString, GraphQLObjectType } = require("graphql");
const { User } = require("../models");
const createJwtToken = require("../utils/auth");

const signUp = {
  type: GraphQLString,
  description: "Sign Up new user",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { username, email, password, displayName } = args;

    const user = new User({ username, email, password, displayName });
    await user.save()

    return "Registration Successful"
  }
}

const logIn = {
  type: GraphQLString,
  description: "LogIn user",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    console.log(args)
    const user = await User.findOne({ email: args.email }).select("+password");
    if (!user || user.password !== args.password) {
      throw new Error("Wrong Credentials!")
    }
    const token = createJwtToken(user);
    return token;
  }
}

module.exports = { signUp, logIn }
const { GraphQLString, GraphQLObjectType } = require("graphql");
const { User, Post } = require("../models");
const createJwtToken = require("../utils/auth");
const { PostType } = require("./types");

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

const addPost = {
  type: PostType,
  description: "Add NEW POST",
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
  async resolve(parent, args, { loggedInUser }) {
    console.log(loggedInUser)
    if (!loggedInUser) {
      throw new Error("Unauthorized")
    }

    const post = new Post({
      authorId: loggedInUser._id,
      title: args.title,
      body: args.body
    })

    await post.save();

    return post;
  }
}

module.exports = { signUp, logIn, addPost }
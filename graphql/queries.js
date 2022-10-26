const { GraphQLList, GraphQLID } = require("graphql")
const { User, Post } = require("../models")
const { UserType, PostType } = require("./types")

const users = {
  type: new GraphQLList(UserType),
  description: "Retrieves list of users",
  resolve(parent, args) {
    return User.find()
  },
}

const user = {
  type: UserType,
  description: "Retrives one user",
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    const user = await User.findById(args.id)
    return user;
  }
}

const posts = {
  type: new GraphQLList(PostType),
  description: "Retrives list of posts",
  resolve(parent, args) {
    return Post.find()
  }
}

const post = {
  type: PostType,
  description: "Retrives one post",
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    const post = await Post.findById(args.id);
    return post;
  }
}

module.exports = { users, user, posts, post }
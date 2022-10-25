const mongoose = require("mongoose")

const connectDB = async () => {
  const connect = mongoose.connect(process.env.DATABASE_LOCAL)
  console.log("DB connected successfully...........")
}

module.exports = { connectDB }
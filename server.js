const dotenv = require('dotenv').config();
const app = require("./app");
const { connectDB } = require("./db/index")
const port = process.env.PORT || 3000;
// connect db function call
connectDB();
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
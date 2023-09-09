//import libraries
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//start express server
const app = express();

const PORT = process.env.PORT || 4000;
//start mongoose server
mongoose.connect(
  process.env.MONGO_URL ||
    "mongodb+srv://userName:password@userName.jzy0nou.mongodb.net/",
  { useNewUrlParser: true }
);
//check connection with mongoose server
const con = mongoose.connection;
con.on("open", () => {
  console.log("Connected");
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
//import enities
const userRouter = require("./routers/users");
const transactionRouter = require("./routers/transactions");
//mention entities path to listen
app.use("/users", userRouter);
app.use("/transactions", transactionRouter);
//listen to the port
app.listen(PORT, () => {
  console.log("Server started");
});

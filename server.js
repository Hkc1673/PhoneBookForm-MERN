const express = require("express")
const router = require("./routers/router");
const app = express();

const connectDB = require("./models/connectDB");
require("dotenv").config();

//middleware

app.use(express.json());
app.use("/api", router);

// connecting DB

connectDB();

app.listen(5001, () => {
    console.log("I am listening port")
})
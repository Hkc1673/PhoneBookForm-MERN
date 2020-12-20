const express = require("express")
const router = require("./routers/router");
const app = express();

const connectDB = require("./models/connectDB");
require("dotenv").config();

//middleware

app.use(express.json());
app.use("/api", router);

//production

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }


// connecting DB

connectDB();

app.listen(5001, () => {
    console.log("I am listening port")
})
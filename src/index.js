require("./models/User");
const express = require("express");
const port = 3000;
const APIKeys = require("../APIKeys");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/authRoutes");
const app = express();

app.use(bodyParser.json());
app.use(routes);

const mongoUri = `mongodb+srv://admin:${APIKeys.keys.mongoPw}@follow-moi.3hwda.mongodb.net/admin?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo DB Instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error Connecting to Mongo: ", err);
});
app.get("/", (req, res) => res.send("Hello World!!"));

app.listen(port, () => console.log(`Track app listening on port 3000!`));

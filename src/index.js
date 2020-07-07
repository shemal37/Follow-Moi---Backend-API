require("./models/User");
require("./models/Track");
const express = require("express");
const app = express();
const port = 3000;
const APIKeys = require("../APIKeys");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/authRoutes");
const requireAuth = require("../src/middlewares/requireAuth");
const trackRoutes = require("./routes/trackRoutes");
app.use(bodyParser.json());
app.use(routes);
app.use(trackRoutes);

const mongoUri = `mongodb+srv://admin:${APIKeys.keys.mongoPw}@follow-moi.3hwda.mongodb.net/User?retryWrites=true&w=majority`;

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

app.get("/", requireAuth, (req, res) => {
  res.send(`Your Email: ${req.user}`);
});

app.listen(port, () => console.log(`Track app listening on port 3000!`));

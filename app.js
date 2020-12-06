const express = require("express");
const app = express();
const route = require("./routes/place-routes");
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/place", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
route(app);

app.use((err, req, res, next) => {
  // any error should return from response
  console.log(err.message);
  res.status(422).send({ err: err });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
module.exports = app;

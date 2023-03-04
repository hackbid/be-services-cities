//create express app
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 4005;
const router = require('./routes/index')
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
  console.log(`Cities service listening at http://localhost:${port}`);
});

// module.exports = app;

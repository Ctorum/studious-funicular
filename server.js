const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/routes");
require("dotenv/config");

const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("XD");
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

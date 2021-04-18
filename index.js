const fs = require("fs");
const express = require("express");

const app = express();

const x = fs.readFileSync("./w.json", {
  encoding: "utf8",
  flag: "r",
});

app.use(require("morgan")("tiny"));
app.put("/", (req, res) => {
  var search = req.query.search;
  const result = [];

  res.json(result);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

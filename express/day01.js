const express = require("express");
const app = express();
const port = 80;

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function handleFirstClick(req, res) {
  const limit = req.query.limit;
  const summary = "sum of first " + limit + " natural number is " + sum(limit);
  res.send(summary);
}

app.get("/:name", handleFirstClick); // -> for dynamic routing use /:any

function handleWhat(req, res) {
  res.send("i am learning express");
}

app.get("/what", handleWhat);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

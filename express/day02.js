//week 2.2
const express = require("express");
const bodyParser = require("body-parser"); //-> npm intstall bodyParser
const app = express();
const port = 3000;

// function middleware1(req, res, next) {
//   console.log("from side of middleware");
//   next();
// }

// app.use(middleware1);

app.use(bodyParser.json());

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function multiply(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

function handleFirstClick(req, res) {
  // const limit = req.body.limit;
  const limit = req.headers.limit;
  console.log(limit);
  const calculatedSum = sum(limit);
  const calculatedMul = multiply(limit);

  const answerObj = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  const summary = "sum is " + calculatedSum + " mul is " + calculatedMul;

  res.status(200).send(summary); //->here in this case if we do not use .status(200) by default status is 200
}

// function givePage(req, res) {
//   res.send(`
//     <head>
//       <title>Hello from page</title>
//     </head>

//     <body>
//       <b>hi there</b>
//       <i>kya bolti public!</i>
//     </body>

//   `);
// }

// app.get("/", givePage);
app.get("/handleCount", handleFirstClick); // -> for dynamic routing use /:any

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

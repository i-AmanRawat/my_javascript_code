//server talking to server that of week 2.2 
function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callBackFn(result) {
  result.text().then(logResponseBody);
}

const sendObj = {
  method: "GET",
  headers: {
    limit: 14,
  },
};
fetch("http://localhost:3000/handleCount", sendObj).then(callBackFn);

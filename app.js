const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Auto scaling nodejs app</h1>");
});

app.listen(port, () => {
  console.log(`Deom app is at ${port}`);
});

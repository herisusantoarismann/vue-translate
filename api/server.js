const express = require("express");
const path = require("path");
const randomId = require("random-id");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;
const translate = require("@vitalets/google-translate-api");

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));

app.get("/api/users", (req, res) => {
  console.log("api/users called!!!!!!!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.post("/api/translate", async (req, res) => {
  let response = await translate(req.body.text, {
    from: req.body.from,
    to: req.body.to,
  });
  res.json(response);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

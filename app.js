const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index3.html");
});

app.use("/", router);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});

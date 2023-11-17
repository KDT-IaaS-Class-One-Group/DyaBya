const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.static("public"));

app.use("/", router);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});

import express from "express";
import router from "./routes.js";
const app = express();
const port = 3101

app.use(express.static("public"));
app.use("/", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
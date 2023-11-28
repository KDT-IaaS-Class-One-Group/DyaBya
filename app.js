import express from "express";
import router from "./routes.mjs";

const app = express();

app.use(express.static("public"));
app.use("/", router);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
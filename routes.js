import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// <form id="memo-Form" method="POST">
router.post("/", (req, res)=> {
  res.sendFile(path.join(__dirname, "public/index.html"));
})


export default router;
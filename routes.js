import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from "path";  // 이 부분을 추가합니다.

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index3-1.html"));
});

export default router;


// import express from "express";
// import path from "path";

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index3-1.html"));
// });

// export default router;
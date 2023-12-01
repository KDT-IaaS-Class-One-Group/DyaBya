// const express = require("express");
// const path = require("path");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 데이터 파일 경로
const dataFilePath = path.join(__dirname, 'data', 'data.json');

// API 엔드포인트: 메모 추가
router.post('/api/memos', (req, res) => {
  try {
    const { title, content, timestamp } = req.body;

    // 기존 데이터 불러오기
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

    // 새로운 메모 추가
    const newMemo = { title, content, timestamp };
    data.memos.push(newMemo);

    // 데이터 파일에 쓰기
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.json(newMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
import {createMemo} from "./createMemo.js";

export function loadMemo() {
  const selectors = {
    memoList: document.getElementById("memo-list"),
  };

  const memos = JSON.parse(localStorage.getItem("memos")) || [];
  selectors.memoList.innerHTML = "";
  memos.forEach((memo) => createMemo(memo.title, memo.content, memo.timestamp));
}

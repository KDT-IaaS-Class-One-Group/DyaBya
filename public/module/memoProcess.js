import {createMemo} from "./createMemo.js";
import {saveMemo} from "./saveMemo.js";
import {loadMemo} from "./loadMemo.js";

export function memoProcess() {
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("hashchange", () => {
      const selectors = {
        memoForm: document.getElementById("memo-Form"),
        title: document.getElementById("title"),
        content: document.getElementById("content"),
        saveBtn: document.getElementById("saveBtn"),
        memoList: document.getElementById("memo-list"),
      };

      if (!selectors.memoList) {
        console.error("Memo list element not found!");
        return; // memoList를 찾을 수 없는 경우 함수를 종료합니다.
      }

      selectors.saveBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const title = selectors.title.value;
        const content = selectors.content.value;

        if (!title) {
          alert("이름을 입력하세요.");
        } else if (!content) {
          alert("내용을 입력하세요.");
          return;
        }

        const timestamp = new Date().toLocaleString();
        const newMemo = {
          title: title,
          content: content,
          timestamp: timestamp,
        };

        saveMemo(newMemo);
        createMemo(newMemo.title, newMemo.content, newMemo.timestamp);
        selectors.content.value = "";
      });

      const clearBtn = document.getElementById("clear");
      clearBtn.addEventListener("click", function () {
        localStorage.removeItem("memos"); // localStorage에서 'memos' 항목 제거
        selectors.memoList.innerHTML = ""; // memo-list 부분을 비움
      });

      loadMemo();
    });
  });
}

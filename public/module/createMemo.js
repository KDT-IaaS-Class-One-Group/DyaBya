export function createMemo(title, content, timestamp) {
  const selectors = {
    memoForm: document.getElementById("memo-Form"),
    title: document.getElementById("title"),
    content: document.getElementById("content"),
    saveBtn: document.getElementById("saveBtn"),
    memoList: document.getElementById("memo-list"),
  };

  const memo = document.createElement("div");
  memo.classList.add("memo-item");

  const memoContent = `
    <h2>${title}</h2>
    <p>${content}</p>
    <p>${timestamp}</p>
  `;

  memo.innerHTML = memoContent;
  selectors.memoList.appendChild(memo);
}
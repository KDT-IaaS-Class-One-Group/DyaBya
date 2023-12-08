// home => prompt 채팅창 생성.
export function createMemo(title, content, timestamp) { // createMemo 함수에 title, content, timestamp 매개변수 선언.
  const selectors = { // selectirs 변수 선언(해당 데이터의 변수명 설정과 경로 설정)
    memoForm: document.getElementById("memo-Form"),
    title: document.getElementById("title"),
    content: document.getElementById("content"),
    saveBtn: document.getElementById("saveBtn"),
    memoList: document.getElementById("memo-list"),
  };

  const memo = document.createElement("div"); // memo 변수에 div 생성자 함수 사용.
  memo.classList.add("memo-item"); // 생성자함수로 생성된 div안 classList중 "memo-item"을 불러옴.

  // memoContent에 title, content, timestamp 매개변수를 백틱 태그처리로 담아둠.
  const memoContent = `
    <h2>${title}</h2>
    <p>${content}</p>
    <p>${timestamp}</p>
  `;

  memo.innerHTML = memoContent; // 생성자 함수를 사용한 div안에 동적으로 menoContent를 담음.
  selectors.memoList.appendChild(memo); // selectors의 menoList에 memo를 하위 데이터로 처리.
}
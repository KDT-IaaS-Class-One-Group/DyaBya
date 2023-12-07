      // #home prompt
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
            saveMemoToJson(newMemo);
            createMemo(newMemo.title, newMemo.content, newMemo.timestamp);
            selectors.content.value = "";
          });

          // function createMemo(title, content, timestamp) {
          //   const memo = document.createElement('div');
          //   memo.classList.add('memo-item');
          //   const h2Tag = document.createElement('h2')
          //   h2Tag.innerHTML = title
          //   const PTag = document.createElement('p')
          //   PTag.innerHTML = content
          //   const P2Tag = document.createElement('p')
          //   P2Tag.innerHTML = timestamp
          //   memo.appendChild(h2Tag)
          //   memo.appendChild(PTag)
          //   memo.appendChild(P2Tag)

          //   selectors.memoList.appendChild(memo);
          // }
          // 코드 간략화를 위해 createMemo함수 아래 코드로 수정

          function createMemo(title, content, timestamp) {
            const memo = document.createElement("div");
            memo.classList.add("memo-item");
            // 일일이 동적 생성하고 추가해주는 부분을 innerHTML이기에 특성을 이용해서 탬플릿으로 한번에 작성하고 추가해주었음.
            const memoContent = `
          <h2>${title}</h2>
          <p>${content}</p>
          <p>${timestamp}</p>
        `;

            memo.innerHTML = memoContent;
            selectors.memoList.appendChild(memo);
          }

          function saveMemoToJson(memo) {
            const memos = JSON.parse(localStorage.getItem("memos")) || [];
            memos.push(memo);
            localStorage.setItem("memos", JSON.stringify(memos));
          }

          const clearBtn = document.getElementById("clear");
          clearBtn.addEventListener("click", function () {
            localStorage.removeItem("memos"); // localStorage에서 'memos' 항목 제거
            selectors.memoList.innerHTML = ""; // memo-list 부분을 비움
          });

          function loadMemosFromLocalStorage() {
            const memos = JSON.parse(localStorage.getItem("memos")) || [];
            selectors.memoList.innerHTML = "";
            memos.forEach((memo) =>
              createMemo(memo.title, memo.content, memo.timestamp)
            );
          }
          loadMemosFromLocalStorage();
        });
      });
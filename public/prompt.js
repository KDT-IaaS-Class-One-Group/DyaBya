export default function prompt(){
  return `<script>
  document.addEventListener("DOMContentLoaded", () => {
      const selectors = {
        memoForm: document.getElementById('memo-Form'),
        title: document.getElementById('title'),
        content: document.getElementById('content'),
        saveBtn: document.getElementById('saveBtn'),
        memoList: document.querySelector('.memo-list')
      };

      // Create a style tag and append the styles
      const styleTag = document.createElement('style');
      styleTag.textContent = styles;
      document.head.appendChild(styleTag);

      selectors.saveBtn.addEventListener('click', function (event) {
        // event.preventDefault() : form에서 button 눌렀을때 동작을 중단시킴
        event.preventDefault();

        const title = selectors.title.value;
        const content = selectors.content.value;

        if (!title) {
          alert('이름을 입력하세요.');
        } else if (!content) {
          alert('내용을 입력하세요.');
          return;
        }

        // 현재 시간 
        const timestamp = new Date().toLocaleString();

        // 새로운 메모 객체 생성
        const newMemo = {
          title: title,
          content: content,
          timestamp: timestamp
        };

        // 새로운 메모를 JSON 파일에 저장
        saveMemoToJson(newMemo);

        // createMemo : 새로운 메모 생성하고 화면에 표시
        createMemo(newMemo.title, newMemo.content, newMemo.timestamp);

        
        // name, content 입력 후 content 는 초기화
        selectors.content.value = '';
      });

      // 메모를 동적으로 생성
      function createMemo(title, content, timestamp) {
        const memo = document.createElement('div');
        // memo 요소에 'memo-item' 클래스를 추가 (CSS 적용하기 위해)
        memo.classList.add('memo-item');
        // 템플릿 리터럴을 사용하여 HTML 문자열을 동적으로 생성
        const h2Tag = document.createElement('h2')
        h2Tag.innerHTML = title
        const PTag = document.createElement('p')
        PTag.innerHTML = content
        const P2Tag = document.createElement('p')
        P2Tag.innerHTML = timestamp
        memo.appendChild(h2Tag)
        memo.appendChild(PTag)
        memo.appendChild(P2Tag)
        // 작성한 메모를 표시 할 부모 요소 = memoList
        // memo를 부모 요소의 자식으로 추가
        selectors.memoList.appendChild(memo);
      }

     // 로컬 스토리지에서 이전에 저장된 메모 목록을 불러옴
      function saveMemoToJson(memo) {
        // localStorage.getItem('memos') : 로컬 스토리지에서 'memos' 키에 해당하는 값을 가져옴
        // 가져온 값을 JSON 형식에서 JavaScript 객체로 변환
        // 이전에 저장된 메모가 없는 경우 빈 배열을 사용 || [];
        const memos = JSON.parse(localStorage.getItem('memos')) || [];
        // 이전에 작성했던 메모들에 새로 작성한 메모를 push
        memos.push(memo);
        // 업데이트된 배열을 다시 JSON 문자열로 변환하고, 이를 로컬 스토리지에 'memos' 키에 저장
        localStorage.setItem('memos', JSON.stringify(memos));
      }


      // 아래 함수 => 새로고침하면 초기화 됨
      // 로컬 스토리지에서 메모를 불러와 화면에 표시하는 함수
      function loadMemosFromLocalStorage() {
        // localStorage.getItem('memos') : 로컬 스토리지에서 'memos' 키에 해당하는 값을 가져옴
        // 가져온 값을 JSON 형식에서 JavaScript 객체로 변환
        const memos = JSON.parse(localStorage.getItem('memos')) 
        // 메모 목록을 초기화
        selectors.memoList.innerHTML = '';
        // 배열 순회하면서 memo에 대해 createMemo 함수를 호출 
        memos.forEach((memo) => createMemo(memo.title, memo.content, memo.timestamp));
      }

      loadMemosFromLocalStorage();

      // 로컬에 저장된 내용 삭제하고 싶을 때 사용하는 함수
      // localStorage.clear()
    });

</script>`
}
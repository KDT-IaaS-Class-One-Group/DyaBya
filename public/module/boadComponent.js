//? ID = bord 유효성 검사(member)
export function boadComponent(id, firsName){ // 모듈화 진행. boadComponent함수에 id,firsName 매개변수 입력.
  const boad = document.getElementById('boad') //boad 변수 선언 [ID값의 경로 설정]
  boad.innerHTML = component2( // boad의 HTML 콘텐츠 변경.
    'div', // div태그 생성.
    {id:id}, // id = id 매개변수 지정.
    [component2('p', {}, [dataCheck(firsName)])] //p태그(내용)에서 속성 값 없이 데이터 체크
    )
  }
    //! dataCheck.js
    // function dataCheck(firstName) {
    //   const url = memberData[firstName].url;
    //   const hobby = memberData[firstName].hobby;
    //   const urlCheck = url.includes("https://github.com/");
    //   const hobbyCheck = Object.keys(hobby).length !== 0;
    
    //   if (urlCheck && hobbyCheck) {
    //     return `Url : ${memberData[firstName].url}<br> Hobby : ${memberData[firstName].hobby}<br> Resolution : ${memberData[firstName].resolution}`;
    //   } else {
    //     return `적절한 데이터를 입력해주세요`;
    //   }
    // }
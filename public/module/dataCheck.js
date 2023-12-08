export const memberData = {
  kim: {
    url: "https://github.com/kimwoojin123/",
    hobby: ["음악감상", "자전거 타기"],
    resolution: "팀원들의 스트레스를 줄이겠습니다!",
  },
  bang: {
    url: "https://github.com/seunghee1108/",
    hobby: ["음악감상", "산책"],
    resolution: "빡세게 열심히 하겠습니다!",
  },
  jung: {
    url: "https://github.com/JungYoungSick",
    hobby: ["독서", "영화감상", "클래식감상", "자전거타기"],
    resolution: "맡은 바 최선을 다 하겠습니다!",
  },
  choi: {
    url: "https://github.com/csm009177",
    hobby: ["컴퓨터 하드웨어 조립"],
    resolution: "재밌게 같이 하겠습니다!",
  },
};

//? 데이터 유효성 검사를 통한 해당 데이터 불러오기.
export function dataCheck(firstName) { // 모듈화 진행. dataCheck함수에 매개변수 firstName을 담음.
  const url = memberData[firstName].url; // url 변수 선언.(변수 memberData에 해당하는 성씨(firstName)의 url 호출)
  const hobby = memberData[firstName].hobby; // hobby 변수 선언. (변수 memberData에 해당하는 성씨(firstName)의 hobby 호출)
  const urlCheck = url.includes("https://github.com/"); // urlCheck 변수 선언. (url변수에서 "https://github.com/"데이터를 확인)
  const hobbyCheck = Object.keys(hobby).length !== 0; // hobbyCheck 변수 선언. (객체의 key값 중 hobby의 데이터를 찾아 길이 값중 해당하는 값을 확인)

  if (urlCheck && hobbyCheck) { // 조건문 url데이터를 확인하고 hobbyCheck가 참일경우. 
    return `Url : ${memberData[firstName].url}<br> Hobby : ${memberData[firstName].hobby}<br> Resolution : ${memberData[firstName].resolution}`; // memberData에서 firstName의 url을 꺼내오는 방식으로 모든 데이터도 동일방식을 사용하여 정보를 출력한다.
  } else {
    return `적절한 데이터를 입력해주세요`; // 해당하는 데이터가 없을 경우 `적절한 데이터를 입력해주세요` 라고 데이터를 출력시킨다.
  }
}


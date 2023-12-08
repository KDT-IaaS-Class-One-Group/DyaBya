const memberData = {
  kim: {
    name:"김우진",
    url: "https://github.com/kimwoojin123/",
    hobby: ["음악감상", "자전거 타기"],
    resolution: "팀원들의 스트레스를 줄이겠습니다!",
  },
  bang: {
    name:"방승희",
    url: "https://github.com/seunghee1108/",
    hobby: ["음악감상", "산책"],
    resolution: "빡세게 열심히 하겠습니다!",
  },
  jung: {
    name:"정영식",
    url: "https://github.com/JungYoungSick",
    hobby: ["독서", "영화감상", "클래식감상", "자전거타기"],
    resolution: "맡은 바 최선을 다 하겠습니다!",
  },
  choi: {
    name:"최성민",
    url: "https://github.com/csm009177",
    hobby: ["컴퓨터 하드웨어 조립"],
    resolution: "재밌게 같이 하겠습니다!",
  },
};

export function dataCheck(firstName) {
  const url = memberData[firstName].url;
  const hobby = memberData[firstName].hobby;
  const urlCheck = url.includes("https://github.com/");
  const hobbyCheck = Object.keys(hobby).length !== 0;

  if (urlCheck && hobbyCheck) {
    return `Name : ${memberData[firstName].name}<br> Url : ${memberData[firstName].url}<br> Hobby : ${memberData[firstName].hobby}<br> Resolution : ${memberData[firstName].resolution}`;
  } else {
    return `적절한 데이터를 입력해주세요`;
  }
}
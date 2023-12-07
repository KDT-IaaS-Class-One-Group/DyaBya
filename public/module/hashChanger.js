import {dataCheck, hashCheck} from "./checkModules.js";
import {component2} from "./component.js";
import prompt from "./prompt.js";

const memberData = {
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

export function hashChanger() {
  window.addEventListener("hashchange", () => {
    const board = document.getElementById("board");
    const hash = window.location.hash;

    switch (hash) {
      case hashCheck(0):
        board.innerHTML = ""; // 비우기
        const promptDiv = document.createElement("div");
        promptDiv.innerHTML = prompt; // prompt 문자열을 HTML로 변환하여 div 안에 삽입
        board.appendChild(promptDiv); // board에 추가
        break;
      case hashCheck(1):
        board.innerHTML = component2("div", {class: "cont"}, [
          component2("h1", {}, [
            `저희는 이제 DB, 데이터 베이스 구축을 진행 할 예정입니다.<br> 만드는 프로그램이 데이터 베이스를 
        꺼내는 역할을 해주기에 프로그램의 마음을 <br>이어받아 D를 꺼내줄지 B를 꺼내줄지 물어보는 것을 팀명으로 정했습니다.`,
          ]),
        ]);
        break;
      case hashCheck(2):
        const memberLinks = Object.keys(memberData).map((key) =>
          component2("div", {class: "member-board"}, [component2("a", {href: `#${key}`}, [`${key}`])])
        );
        board.innerHTML = component2("div", {}, [
          component2("div", {id: "side"}, memberLinks),
          component2("div", {id: "boad"}),
        ]);
        break;
      case hashCheck(3):
        board.innerHTML = component2("div", {class: "cont"}, [
          component2("h1", {}, [
            `1. 후회가 남지 않도록 최선을 다하자.<br>
              2. 쉽게 오지 않는 기회를 잡고 나아가자. <br>
              3. 나의 것을 만들 때까지 포기하지 말자.`,
          ]),
        ]);
        break;
      case "#kim":
        boadComponent("cont1", "kim");
        break;
      case "#bang":
        boadComponent("cont2", "bang");
        break;
      case "#jung":
        boadComponent("cont3", "jung");
        break;
      case "#choi":
        boadComponent("cont4", "choi");
        break;
      default:
        board.innerHTML = component2("h1", {style: "font-weight:bold "}, ["반갑습니다. 저희는 DyaBya 팀 입니다"]);
    }
  });
}
function boadComponent(id, firsName) {
  const boad = document.getElementById("boad");
  boad.innerHTML = component2("div", {id: id}, [component2("p", {}, [dataCheck(firsName)])]);
}

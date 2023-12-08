//? component  데이터 처리
export function createElement(type, props, ...children) { // 모듈화 진행. createElement함수에 type,props,...children 매개변수 입력.
  return { type, props, children };
  // return을 통한 데이터 반환(type, props, children)
}
//? head comoponent 데이터 처리
export function component(stateData) { // 모듈화 진행. component함수에 stateData 매개변수 입력.
  const menuItems = []; // menuItems를 빈 배열로 지정.
  for (let i = 0; i < stateData.length; i++) { // 반복문을 통한 상태데이터 조회.
    const item = stateData[i]; // 변수 item을 조회한 i 상태 데이터로 출력 변수 선언.
    const menuItem = createElement( // menuItem을 createElement 함수로 변수 선언.
      "li",
      { style: "margin:auto; list-style:none;" }, //<li>태그 생성과 속성을 부여.
      createElement("a", { href: item.hash }, item.text) // <li>태그에 createElement 함수를 새로 선언해주며, <a>태그 생성 및 item.hash속성을 받아온 후 해당 객체 text값을 출력.
    );
    menuItems.push(menuItem); // menuItems 빈 배열에 menuItem을 push 매서드를 사용하여 데이터 값 추가.
  }

  const menu = createElement( // menu를 createElement 함수로 변수 선언.
    "ul",
    {
      style:
        "width: 100vw; height: 10vh; display: flex;  flex-direction: row; text-align: center; justify-content: center;      align-items: center;",
    }, // <ul>태그 생성 및 속성 추가(카테고리 생성 스타일)
    ...menuItems // 값으론 ...menuItems를 지정.
  );

  const content = createElement("div", {}, ""); // content를 createElement함수로 변수 선언.(<div>태그 생성과 빈 속성, 빈 값으로 둠. = div 생성 목적)
  return createElement("div", {}, menu, content); // createElement함수의 div박스에 menu,content 변수를 값으로 반환 출력.
}

//? 모듈화 진행. 태그 생성과 해당하는 값을 자동화 생성하는 코드.
export function component2(elementNode, attributes, children) {
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    elementStr += ` ${key} = "${attributes[key]}"`;
  }
  elementStr += ">";
  if (children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  elementStr += `</${elementNode}>`;
  return elementStr;
}

//? createElement 함수 render함수를 통한 가상돔 element 데이터 반환
export function render(virtualDom) { // 모듈화 진행. render함수에 virtualDom 매개변수 선언.
  if (typeof virtualDom === "string") { // 조건문을 통한 virualDom 타입을 string으로 검사.
    return document.createTextNode(virtualDom); // 참일 경우 virtalDom의 매개변수를 반환.
  }
  const element = document.createElement(virtualDom.type); // element에 virtualDom 타입을 생성하는 변수 선언.
  if (virtualDom.props) { // 조건문을 통한 virualDom속성을 확인.
    for (const [key, value] of Object.entries(virtualDom.props)) { // 참일 경우 반복문을 통한 key값과 value값을 배열에 담은 변수를 찾기. 또는 객체 데이터 구조 내의 배열 항목 중 virualDom.props를 찾는 조건 작성.
      element.setAttribute(key, value); // 참일 경우 virualDom.type을 생성 후 동적으로 HTML의 속성을 key값과 value값을 출력.
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) { // virtualDom의 children 매개변수 길이 중 i값을 출력하는 반복문 작성.
    const child = virtualDom.children[i]; // child에 virualDom에 children[i]의 값을 담는 변수 선언
    element.appendChild(render(child)); // virtualDom.type에 하위로 child를 render(변환)진행.
  }
  return element; // virtualDom의 타입을 반환.
}
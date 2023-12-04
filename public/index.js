// createElement 함수 초기화
export function createElement(type, props, ...children) { // 타입과 속성, 자식을 매개변수로 지정.
  // 요소를 나타내는 객체를 반환합니다.
  return { type, props, children }; // 타입과 속성, 자식의 값을 반환.
}

// head component
export function component(stateData) { //상태 데이터를 매개변수로 지정.
  const menuItems = []; // 메뉴 아이템을 빈 배열로 지정.

  // 상태 데이터를 반복하여 메뉴 아이템을 생성합니다.
  //? 아래 반복문의 데이터는 url의 hash change 기능이며, 값을 찾아 데이터를 반환하는 부분이다.
  for (let i = 0; i < stateData.length; i++) { // 상태 데이터 길이만큼 반복.
    const item = stateData[i]; // 반복을 통한 상태 데이터 값 반환.
    const menuItem = createElement('li', { style: 'margin:auto; list-style:none;' }, // 메뉴 아이템 변수 선언.(<li>태그 생성, 스타일 속성 추가, stateData 해쉬와 텍스트 값 가져오기.)
      createElement('a', { href: item.hash }, item.text) // <a>태그 생성, stateData 해쉬와 텍스트 값 가져오기.
    );
    menuItems.push(menuItem); // 메뉴 아이템에 push메서드를 사용하여 변수 menuItem에 적용.
  }


  //? 해당 코드는 상단 head의 카테고리 박스의 스타일을 변수로 선언해주고 카테고리 안 div박스를 생성하는 부분이다.
  // 메뉴를 나타내는 요소를 생성합니다.
  const menu = createElement('ul', { // menu 변수 선언 = <ul> 태그 생성.
    style: 'width: 100vw; height: 10vh; background-color: #00cc33; display: flex;  flex-direction: row; text-align: center; justify-content: center; align-items: center;' //menu 변수 <ul>의 속성 스타일 작성.
  }, ...menuItems); // ...menuItem 까지 값을 적용.

  //? head 카테고리 박스 생성, 스타일 요소 값 return으로 반환.
  // 내용을 나타내는 요소를 생성합니다.
  const content = createElement('div', {}, ''); //! title of component(현재 사용하지는 않으나 나중 사용을 위해 남겨둠.)
  // 메뉴와 내용을 포함하는 부모 요소를 생성합니다.
  return createElement('div', {}, menu, content);
}

export function render(virtualDom) {
  if (typeof virtualDom === 'string') {
    // 문자열인 경우 텍스트 노드를 생성하여 반환합니다.
    return document.createTextNode(virtualDom);
  }

  // 요소를 생성합니다.
  const element = document.createElement(virtualDom.type);

  if (virtualDom.props) {
    // 속성을 적용합니다.
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }

  // 자식 요소를 처리합니다.
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    // 재귀적으로 render 함수를 호출하여 자식을 처리합니다.
    element.appendChild(render(child));
  }

  // 최종적으로 완성된 요소를 반환합니다.
  return element;
}
// component2 함수
export function component2(elementNode, attributes, children) {
  let elementStr = `<${elementNode}`;

  // 속성을 문자열로 변환합니다.
  for (let key in attributes) {
    elementStr += ` ${key}="${attributes[key]}"`;
  }

  elementStr += '>';

  // 자식 요소를 처리합니다.
  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        // 문자열인 경우 직접 추가합니다.
        elementStr += child;
      } else {
        // 자식이 객체인 경우 component 함수를 통해 처리합니다.
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }

  elementStr += `</${elementNode}>`;

  // 최종적으로 완성된 문자열을 반환합니다.
  return elementStr;
}

// render 함수

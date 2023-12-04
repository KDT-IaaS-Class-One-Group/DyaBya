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
  const menu = createElement('ul', { // menu 변수 선언 = <ul> 태그 생성.
    style: 'width: 100vw; height: 10vh; background-color: #00cc33; display: flex;  flex-direction: row; text-align: center; justify-content: center; align-items: center;' //menu 변수 <ul>의 속성 스타일 작성.
  }, ...menuItems); // ...menuItem 까지 값을 적용.

  //? head 카테고리 박스 생성, 스타일 요소 값 return으로 반환.
  // 내용을 나타내는 요소를 생성합니다.
  const content = createElement('div', {}, ''); //! title of component(현재 사용하지는 않으나 나중 사용을 위해 남겨둠.)
  // 메뉴와 내용을 포함하는 부모 요소를 생성합니다.
  return createElement('div', {}, menu, content); // div 생성 및 menu, content 값 반환.(해당 menu는 <ul> 카테고리'div'를 생성하며, 현재 값은 아직 추가되지 않은 상태이다.)
}
//? render 함수를 통한 component 변환.
export function render(virtualDom) { // 함수 render에 매개변수 virtualDom 작성.
  if (typeof virtualDom === 'string') { // typeof를 통해 virtualDom 속성이 문자열인지 검사 진행.
    return document.createTextNode(virtualDom);// virtualDom이 문자열인 경우 텍스트 노드를 생성하여 반환합니다.
  }


  const element = document.createElement(virtualDom.type);// element 변수 선언, virtualDom.type 요소를 생성합니다.

  //? 조건문을 통한 속성 적용.
  if (virtualDom.props) { // virtualDom.props의 속성 적용하기 위한 경로 값 지정.
    for (const [key, value] of Object.entries(virtualDom.props)) { // 반복문 작성(변수 선언으로 [key,value] "for...of"루프를 사용하여, Object.entries 메서드로 키, 값을 쌍을 배열로 반환한다.
      //! Object.entries() 메서드는 객체의 각 키-값 쌍을 [key, value] 형태의 배열로 반환하는 메서드이다.
      element.setAttribute(key, value); // virtualDom.type요소를 담고 있는 element에 Dom요소의 속성 중 key값과 value값을 출력한다.
      //! setAttribute 메서드는 DOM 요소의 속성(attribute)을 설정하거나 수정하는 역할을 합니다. 
      //! 이 메서드를 사용하여 HTML 요소에 속성을 추가하거나 값을 변경할 수 있습니다.
    }
  }

  //? virtualDom.type의 자식요소로 child를 render 진행 후 virtualDom.type을 반환.
  for (let i = 0; i < virtualDom.children.length; i++) { // 반복문을 통하여 virtualDom의 자식 요소를 처리합니다.
    const child = virtualDom.children[i];
    // 재귀적으로 render 함수를 호출하여 자식을 처리합니다.
    element.appendChild(render(child));
  }

  // 최종적으로 완성된 요소를 반환합니다.
  return element;
}
//? component2 함수(값 문자열 변환 및 생성.)
export function component2(elementNode, attributes, children) { // component2함수명에 elementNode, attributes, children을 매개변수로 담음.
  let elementStr = `<${elementNode}`; // 변수 elementStr에 현재 지정되지 않은[elementNode]태그를 리터럴 형식으로 담는다.

  // 속성을 문자열로 변환합니다.
  for (let key in attributes) { // 반복문을 통한 key값을 찾아 key 값에 맞는 attributes(속성)을 호출한다.. 
    elementStr += ` ${key}="${attributes[key]}"`; // elementStr 변수에 key값에 맞는 속성을 문자열로 변환한다.
  }

  elementStr += '>'; // elementStr 여는 태그에 괄호를 닫는다.

  //? 조건문을 통한 자식 요소를 처리합니다.
  if (children) { // if문에 children 매개변수를 호출하여 if문에 children 매개변수를 담는다.
    children.forEach((child) => { // children매개변수에 배열메서드인 forEach를 사용하여 배열의 요소 조건함수를 실행한다.
      //! 배열에서 사용할 수 있는 배열 메서드 중 하나로, 배열의 각 요소에 대해 주어진 함수를 실행하는 역할이다.
      if (typeof child === 'string') { // 조건문 if를 이용하여 child의 타입이 문자열일 경우.
        // 문자열인 경우 직접 추가합니다.
        elementStr += child; // elementStr에 값을 반환한다.
      } else {
        // 자식이 객체인 경우 component 함수를 통해 처리합니다.
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }

  elementStr += `</${elementNode}>`; // 변수 elementStr에 현재 지정되지 않은[elementNode]태그를 리터럴 형식으로 처리하고 괄호를 닫는다.

  // 최종적으로 완성된 elementStr 문자열을 반환합니다.
  return elementStr;
}



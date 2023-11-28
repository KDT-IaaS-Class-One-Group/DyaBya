/**
 * 주어진 요소(element)를 생성하여 반환하는 함수입니다.
 * 
 * @param {string} elementNode - 생성할 HTML 요소의 종류를 나타내는 문자열입니다.
 * @param {object} attributes - 생성된 요소에 적용할 속성들을 나타내는 객체입니다.
 * @param {array} children - 생성된 요소의 자식 요소들을 나타내는 배열입니다.
 * @returns {string} - 생성된 HTML 요소를 나타내는 문자열입니다.
 * 
 * @example
 * component(
 *   'div',
 *   { style: 'color:blue;' },
 *   [component('h1', {}, ['this is page1'])]
 * );
 */

function component(elementNode, attributes, children) {
  // HTML 요소 문자열로 '조립(assemble)' 하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    // 객체의 키(key)를 배열처럼 순회합니다.
    // 매개변수 attributes는 객체여야 하며, for in 문을 사용할 수 있습니다.
    // (Python과 같은 기본적인 반복문 구조를 사용하고 있습니다.)
    elementStr += ` ${key}="${attributes[key]}"`;
  }
  elementStr += '>';

  // 만약 children이 존재한다면(true 판정이 이루어진다면)
  // 조건식에서 '존재유무'를 체크합니다.
  if (children) {
    children.forEach((child) => {
      // children 매개변수는 배열이어야 합니다.
      // 배열의 각 요소를 순회하는 forEach()를 사용했습니다.
      // 절차적인 방식의 for 문 대신, 자바스크립트 다운 방식으로 작성되었습니다.
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  
  elementStr += `</${elementNode}>`; // 맨 위 변수에 덧붙여서 반환합니다.
  return elementStr; // 함수가 호출되는 순간 문자열이 반환됩니다.
}

// 문자열로 잘 작동하는지 테스트한 아래 코드
let test = component('div', { style: 'color:blue;' }, [component('h1', {}, ['this is page1'])]);
console.log(test);
/**
 * 에디터에 드디어 내장된 JSDoc 주석 작성 방식으로 아래의 함수를 설명한다
 * 
 * @param {string} elementNode
 * @param {object} attributes
 * @param {array} children
 * @returns string
 * 
 * @example
 * component (
 *  'div',
 *  {style:'color:blue;'},
 *  [component('h1', {}, ['this is page1']
 * ]);
 * 
 */

function component(elementNode, attributes, children) {
  // HTML Element 문자열로 '조립(assemble)' 하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) { // 객체의 키(key)를 배열처럼 순회한다.
    // 매개변수 attributes 는 객체여야 for in 문 을 사용할 수 있다
    // 대표적으로 python 에서는 해당 문법 접근이 기본 반복문이다
    elementStr += `${key} = "${attributes[key]}"`;
  }
  elementStr += '>';
  // 만약 children이라는 값이 '있다면' true 판정이 이루어진다
  // 조건식에서 '존재유무'로도 사용하기도 한다
  if(children) {
    children.forEach((child) => {
      // children 매개변수는 배열이어야 한다
      // 배열의 각 요소를 순회하는 forEach()를 사용하엿다
      // 절차형으로 for 문을 사용해도 되지만, 자바스크립트 다운 방식으로 작성했다
      if (typeof child === 'string' ) {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  elementStr = `</${elementNode}>`; // 맨 위 변수에 덧붙여서 반환한다.
  return elementStr; // 함수가 호출되는 순간 문자열이 반환된다
}
// 문자열로 잘 작동하는지 테스트 한 아래 코드
let test = component ('div', {style: 'color:blue;'},    [component('h1', {}, ['this is page1'])
]);
console.log(test);
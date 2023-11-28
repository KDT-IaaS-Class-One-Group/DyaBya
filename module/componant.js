function componant(type, props, ...children) {
  // type: 생성할 요소의 타입을 나타내는 문자열입니다. 태그명이 될 수 있습니다.
  // props: 해당 요소에 적용될 속성(Property)들을 나타내는 객체입니다. 
  // ...children: 가변 인자로, 해당 요소의 자식 요소들을 나타냅니다. 
  // 이 부분은 배열 형태로 전달되며, 해당 요소의 하위에 어떤 내용이 들어갈지를 결정합니다.
  return { type, props, children };
}


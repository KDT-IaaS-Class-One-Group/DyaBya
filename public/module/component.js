export function component2(elementNode, attributes, children) {
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    elementStr += `${key} = "${attributes[key]}"`;
  }
  elementStr += '>';
  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    })
  }
  elementStr += `</${elementNode}>`
  return elementStr
}
window.addEventListener('hashchange', () => {
  const contentKim = document.getElementById("Kim");

  const hash = window.location.hash.substr(1);
  switch (hash) {
    case '#Kim':
      contentKim.innerHTML = component('div', { style: 'width: 20vw; height: 10vh; border: 2px solid rgb(34, 132, 34);border-radius: 10px; display: flex; align-items: center;justify-content: center; font-size: 30px; cursor: pointer;' }, [component('div', {}, ['김우진'])])
      break;

    case 'bang':
      contentDiv.innerHTML = component('div', { style: 'background-color:cadetblue;' }, [component('h1', {}, ["This is page 2"])])
      break;

    case '정영식':
      contentDiv.innerHTML = component('div', { style: 'displey:flex; justifly-content:center; color: #ff2222;' }, [component('h1', {}, ["This is page 3"])]);
      break;

    case '최성민':
      contentDiv.innerHTML = component('div', { style: 'displey:flex;justifly-content:center; color:#333' }, [component('h1', {}, ["This is page 4"])])
      break;
    default: //조건이 모두 다 부합하지 않을 때, 즉 false 일때 default가 실행된다. 최초 접속에는 hash가 없기 때문에 default가 실행된다.
      contentDiv.innerHTML = component('h1', {}, ['반갑습니다. 접속 할 때 보이는 페이지(처럼보이는) element입니다.'])
    // 아래의 dispatchEvent()를 사용하지 않으면, 해당 코드가 실행되지 않는다.
  }
});

// 초기 로딩을 위한 코드
window.dispatchEvent(new Event('hashchange'));


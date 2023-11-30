// comoponent
function component(stateData) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement('li', { style: 'margin:auto; list-style:none;' }, createElement('a', { href: item.hash }, item.text));
    menuItems.push(menuItem);
  }

  const menu = createElement('ul', {
    style: 'width: 100vw; height: 10vh;background-color: gray; display: flex;  flex-direction: row; text-align: center; justify-content: center;      align-items: center;'
  }, ...menuItems);


  const content = createElement('div', {}, '');
  return createElement('div', {}, menu, content);
}

export default component;

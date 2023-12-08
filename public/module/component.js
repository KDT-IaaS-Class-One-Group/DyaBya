export function createElement(type, props, ...children) { // bone of component
  return {type, props, children};
}
// head comoponent // can make menuitem list with use stateData
export function component(stateData) {  
  const menuItems = []; // init menuItems
  for (let i = 0; i < stateData.length; i++) { 
    const item = stateData[i]; // declare item is each state
    const menuItem = createElement("li", { // declare menuitem is create litag 
      style: "margin:auto; list-style:none;"},
      createElement("a", {href: item.hash}, item.text) // menuitem include a tag include hash and text 
    );
    menuItems.push(menuItem); // 아이템들을 menuItems에 푸시
  }

  const menu = createElement("ul", {id:"menu"}, ...menuItems); // all item put in menu
  return createElement("div", {}, menu); // result cont is including menu
}

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

export function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}
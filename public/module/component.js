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


// component2 result is elementStr
export function component2(elementNode, attributes, children) { 
  let elementStr = `<${elementNode}`; // start frontelementStr  and put element name                           
  for (let key in attributes) {       // in all attributes 
    elementStr += ` ${key} = "${attributes[key]}"`; // matching key and attributes
  }
  elementStr += ">"; // end frontelementStr 
  if (children) {    // if children exist add chilren
    children.forEach((child) => { // 
      if (typeof child === "string") {
        elementStr += child;
      } else {  // 
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  elementStr += `</${elementNode}>`; // end rearelementStr
  return elementStr;                 // done
}

export function render(virtualDom) {  
  if (typeof virtualDom === "string") {  // type check 
    return document.createTextNode(virtualDom); // 태그가 이 텍스트노드를 감싸도록 하는법
  }
  const element = document.createElement(virtualDom.type); // declare element is type of dom
  if (virtualDom.props) {   // if props is exist
    for (const [key, value] of Object.entries(virtualDom.props)) { 
      element.setAttribute(key, value); // search all props and matching
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) { 
    const child = virtualDom.children[i]; // declare child is each children
    element.appendChild(render(child));   // render child and append to element
  }
  return element; 
}
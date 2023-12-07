export default function component2(elementNode, attributes, children) {
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
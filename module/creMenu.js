function creMenu(fatag, menu){
  const head = document.getElementById(fatag)
  const creHeadElem = document.createElement('div')
  creHeadElem.setAttribute("id", menu);
  creHeadElem.setAttribute("type", "button");
  creHeadElem.style.width = "25vw"
  const textNode = document.createTextNode(menu);
  creHeadElem.appendChild(textNode);
  head.appendChild(creHeadElem)
}

module.exports = creMenu;
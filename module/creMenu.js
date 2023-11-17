function creMenu(fatagid, menu){
  
  const fatag = document.getElementById(fatagid)
  const creHeadElem = document.createElement('div')
  creHeadElem.setAttribute("id", menu);
  creHeadElem.setAttribute("type", "button");
  creHeadElem.style.width = "25vw"
  const textNode = document.createTextNode(menu);
  creHeadElem.appendChild(textNode);
  fatag.appendChild(creHeadElem)
  
}

module.exports = creMenu;
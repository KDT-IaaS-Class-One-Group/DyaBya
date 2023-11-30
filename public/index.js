    // init createElement
    export function createElement(type, props, ...children) {
      return { type, props, children};
    }
    // comoponent
    export function component(stateData) {
      const menuItems = [];
      for (let i=0; i<stateData.length; i++){
        const item = stateData[i];
        const menuItem = createElement('li', {style:'margin:auto; list-style:none;', type="button", name="home", id="Home", value="Home"}, createElement('a', {href:item.hash}, item.text));
        menuItems.push(menuItem);
      }

      const menu = createElement('div', {style: '        width: 100vw; height: 15vh; background-color: rgb(34, 132, 34); display: flex; align-items: center;justify-content: space-around;'}, ...menuItems);
        
      const content = createElement('div', {}, '');
      return createElement('div', {}, menu, content);
    }

    export function render(virtualDom) {
      if(typeof virtualDom === 'string') {
        return document.createTextNode(virtualDom);
      }
      const element = document.createElement(virtualDom.type);
      if(virtualDom.props) {
        for( const [key,value] of Object.entries(virtualDom.props)) {
          element.setAttribute(key,value);
        }
      }
      for(let i=0; i<virtualDom.children.length; i++) {
        const child = virtualDom.children[i];
        element.appendChild(render(child));
      }
      return element;
    }


const createElement =  (reactElement, mainContainer) => {
const domElement = mainContainer.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    for(let attr in reactElement.props){
        domElement[attr] = reactElement.props[attr];
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:"https://google.com"
    },
    children:"Open Google"
}

const mainContainer = document.querySelector("#customRoot")
createElement(reactElement, mainContainer);
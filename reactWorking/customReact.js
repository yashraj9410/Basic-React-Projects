// this js program demonstrates the inner working of react

const createElement =  (reactElement, mainContainer) => {
const domElement = document.createElement(reactElement.type)
    domElement.text = reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:"Open Google"
}

const mainContainer = document.querySelector("#customRoot")
createElement(reactElement, mainContainer);
const createElement =  (reactElement, mainContainer) => {
const domElement = mainContainer.createElement(reactElement.type);
    domElement.innerHtml = reactElement.children
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
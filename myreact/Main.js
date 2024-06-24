const rootElement = document.querySelector(".dic");

const element={
    tag: 'a',
    props:{
        href:'https://www.youtube.com/',
    },
    children: 'Daba de'
}

function customReact(reactElement, rootElement){
    const domElement= document.createElement(reactElement.tag)
    domElement.innerHTML=reactElement.children;
    for(prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    rootElement.appendChild(domElement);
}
customReact(element, rootElement);
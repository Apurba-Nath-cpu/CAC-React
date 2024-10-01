function customRender(reactElement, container) {
    // version 1
    /*
    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.child
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // version 2
    const domElement = document.createElement(reactElement.type)
    domElement.child.innerHTML = reactElement.child

    for(prop in reactElements.props) {
        if(prop == 'children') {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    child: 'Click me to visit google',
    props: {
        href: 'https://google.com',
        target: '_blank',
    }
}

const mainContainer =  document.querySelector('#root')

customRender(reactElement, mainContainer)
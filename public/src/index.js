import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-tinder facepic ="./imagenes/sokopic.png"
        name="Stéphanie" 
        lastname="Soko" 
        age="36"
        city="Bordeaux, Gironde"
        distance="11"
        ></my-tinder>

        <my-tinder facepic ="./imagenes/millerpic.png"
        name="Noah" 
        lastname="Miller" 
        age="21"
        city="Portland, Illinois"
        distance="2"
        ></my-tinder>
        `
    }
}

customElements.define("app-container",AppContainer);

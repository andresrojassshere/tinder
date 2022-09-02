class MyTinder extends HTMLElement {
    static get observedAttributes() {
      return ['facepic','name', 'lastname', 'age', ,'city', 'distance', 'likecount', 'dislikecount'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.onButtonClicked = this.onButtonClicked.bind(this);
      this.onButtonClicked2 = this.onButtonClicked2.bind(this);
    }

    connectedCallback() {
      this.render();
      this.mount();
      this.mount2();
    }


    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
      this.mount();
      this.mount2();
    }

    dissconnectedCallback() {
      this.removeEventListeners();
    }

    mount() {
      this.render();
      this.addEventListeners();
    }

    mount2() {
      this.render();
      this.addEventListeners();
    }

    addEventListeners() {
      this.shadowRoot
        .querySelector(".button1")
        .addEventListener("click", this.onButtonClicked);

        this.shadowRoot
        .querySelector(".button2")
        .addEventListener("click", this.onButtonClicked2);

    }
  
    
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/components/tinder/style.css"
      <section>
    <div class="container">

      <img src="imagenes/tinderlogo.png" class="logoicon">

      <div  class="userinfo" style="background-image:url(${this.facepic})">
        <p class="userfullname">  <b> ${this.name} ${this.lastname}, ${this.age} </b> </p>
        <p class="userlocation"> Lives in ${this.city}</p>
        <p class="userdistance"> ${this.distance} miles away</p>
      </div>


      <div class="buttons">  
        <div class="likesinfo">
          ${this.likecount || 0}
          <button class="button1"> 
             <ion-icon name="heart-circle-outline"></ion-icon> 
          </button>
          <p class="likebutton"> like </p>  
        </div>

        <div class="likesinfo"> 
          ${this.dislikecount || 0}
          <button class="button2"> 
             <ion-icon name="close-circle-outline"></ion-icon>
          </button>


          
          <p class="dislikebutton"> dislike </p>
        </div>

      </div> 

    </div>
      </section>
      `;
    }

    removeEventListeners() {
      this.shadowRoot
        .querySelector(".button1")
        .removeEventListener("click", this.onButtonClicked);

        this.shadowRoot
        .querySelector(".button2")
        .removeEventListener("click", this.onButtonClicked2);
        
    }
  
    onButtonClicked() {
      console.log("clicked like");
      const currentValue = Number(this.getAttribute("likecount")) || 0;
      this.setAttribute("likecount", currentValue + 1);
    }

    onButtonClicked2() {
      console.log("clicked dislike");
      const currentValue2 = Number(this.getAttribute("dislikecount")) || 0;
      this.setAttribute("dislikecount", currentValue2 + 1);
    }

   
  
  }
  
  customElements.define('my-tinder', MyTinder);
  export default MyTinder;
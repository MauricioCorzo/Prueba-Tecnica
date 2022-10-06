import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view..scss";
import BView from "../BView/b-view"

export default class AView extends View {
    constructor(text){
        super(html)
        this.text = text;
        this.init()
    }

    init() {
        const valorInputA = this.viewElement.querySelector("#a-number")
        
        this.viewElement.querySelector(".a-container").innerHTML = this.text;
        let btnSiguiente = this.viewElement.querySelector(".a-btn")

        valorInputA.addEventListener("input", (e) => {
            valorInputA.value = e.target.value
        })

        btnSiguiente.addEventListener("click", () => { 
            this.end(new BView("Vista B", valorInputA.value? valorInputA.value : 0).start())
        })

        
    }
}
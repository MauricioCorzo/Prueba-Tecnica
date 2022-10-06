import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view..scss";
import CView from "../CView/c-view";


export default class BView extends View {
    constructor(text, number){
        super(html)
        this.text = text;
        this.number = number
        this.init()
    }

    init() {


        this.viewElement.querySelector(".b-container").innerHTML = this.text;
        this.viewElement.querySelector(".b-container-number").innerHTML = this.number;
        let btnSiguiente = this.viewElement.querySelector(".b-btn")

        btnSiguiente.addEventListener("click", () => {
            this.number = parseInt(this.number) + 5
            
            this.end(new CView("Vista C", this.number).start())
        })

        
    }
}
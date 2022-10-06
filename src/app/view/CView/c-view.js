import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view..scss";
import AView from "../AView/a-view";
import DView from "../DView/d-view";


export default class CView extends View {
    constructor(text, number){
        super(html)
        this.text = text;
        this.number = number;
        this.init()
    }

    init() {

        const containerView = document.querySelector(".c-view")
        const containerText = this.viewElement.querySelector(".c-container")
        const containerNumber = this.viewElement.querySelector(".c-container-number")
        const btnSiguiente = this.viewElement.querySelector(".c-btn-siguiente")
        const btnReiniciar = this.viewElement.querySelector(".c-btn-reiniciar")
        const btnSwap = this.viewElement.querySelector(".c-btn-swap")

        containerText.innerHTML = this.text;
        containerNumber.innerHTML = this.number;

    function toggleMayorA10(){
            containerView.style.backgroundColor = "rgba(177, 230, 255, 0.751)"

            containerText.style.color = "rgb(7, 60, 144)"

            containerNumber.style.color = "rgb(168, 184, 237)"


            btnSiguiente.classList.add("c-btn-siguiente2") 
            btnSiguiente.classList.remove("c-btn-siguiente")

            btnReiniciar.classList.add("c-btn-reiniciar2") 
            btnReiniciar.classList.remove("c-btn-reiniciar")
   
    }

    function toggleMenorA5(){
            containerView.style.backgroundColor = "rgb(249, 237, 188)"

            containerText.style.color = "rgb(218, 117, 134)"

            containerNumber.style.color = "rgb(238, 76, 103)"


            btnSiguiente.classList.remove("c-btn-siguiente2") 
            btnSiguiente.classList.add("c-btn-siguiente")

            btnReiniciar.classList.remove("c-btn-reiniciar2") 
            btnReiniciar.classList.add("c-btn-reiniciar")
            
    }

   
    if(this.number >= 10){
        toggleMayorA10()
    }

        btnReiniciar.addEventListener("click", () => {
            
            this.end(new AView("Vista A").start())
        })

        btnSiguiente.addEventListener("click", () => {
            
            this.end(new DView("Vista D").start())
        })

        btnSwap.addEventListener("click", () => {
            if(btnReiniciar.className == "c-btn-reiniciar"){
                toggleMayorA10()
            } else {
             toggleMenorA5()
            } 
        })
        
    }
}
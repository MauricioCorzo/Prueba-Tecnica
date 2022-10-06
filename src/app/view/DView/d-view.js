import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view..scss";
import BView from "../BView/b-view";


export default class DView extends View {
    constructor(text){
        super(html)
        this.text = text;
        this.init()
    }

    init() {
        const valorInputD = this.viewElement.querySelector("#d-number")
        
        this.viewElement.querySelector(".d-container").innerHTML = this.text;

        let btnSiguiente = this.viewElement.querySelector(".d-btn")
        let btnClick = this.viewElement.querySelector(".d-btn-click")
        let btn5oClick = this.viewElement.querySelector(".d-btn-5click")
        let btn3yClick = this.viewElement.querySelector(".d-btn-3click")


        async function waitForClick(){
            return new Promise((resolve, reject) => {
                btnClick.addEventListener("click", () => {
                    resolve(console.log("funciona el boton Click"))
                })
            })
        }

        async function waitFor5(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log("Pasaron los 5 segundos")
                    resolve(console.log("La promesa de los '5' segundos se Resolvio!"))
                },5000)
            })
        }

        async function waitFor5orClick(){
            return new Promise((resolve, reject) => {
                let timeOut =  setTimeout(() => {
                    resolve(alert(" Se resolvio la promesa '5' o Click"))
                },5000);

                btn5oClick.addEventListener("click", () => {
                    clearTimeout(timeOut)
                    resolve(alert("Se resolvio la promesa '5' o Click"))
                })
               timeOut()
            })
        }

        async function waitFor3andClick() {
            return new Promise((resolve, reject) => {
                let promesaClick 
                let promesaSegundos 

                btn3yClick.addEventListener("click", () => {
                     promesaClick = true   
                     if(promesaSegundos && promesaClick) resolve(alert("Ambas promesas se cumplieron('3' and Click)"))
                    })
                    setTimeout(() => {
                       promesaSegundos = true
                        if(promesaSegundos && promesaClick) resolve(alert("Ambas promesas se cumplieron('3' and Click)"))
                    },3000)                 
            })
        }

        const p1 = waitForClick()
        const p2 = waitFor5()
        const p3 = waitFor5orClick()
        const p4 = waitFor3andClick()

        Promise.all([p1,p2,p3,p4]).then(r => r)
        
        
        btnSiguiente.addEventListener("click", () => {
            this.end(new BView("Vista B", valorInputD.value).start())
        })

        
    }
}
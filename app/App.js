import { inputAnimation } from "./components/Inputs.js"
import { menuBar, menuBtn } from "./components/MenuBar.js"
import { navBar, navBarBtn } from "./components/NavBar.js"
import { panelBar } from "./components/PanelBar.js"
import darkTheme from "./helpers/Dark_Theme.js"
import { Router } from "./router/router.js"
import { body } from "./views/body.js"


export function App(){
    const $app = document.getElementById("app")

    $app.innerHTML = null    
    $app.appendChild(menuBar())
    $app.appendChild(panelBar())
    $app.appendChild(body())
    $app.appendChild(navBar())  
    darkTheme(".dark-theme-btn", "dark-mode")
    Router()
}

document.addEventListener("DOMContentLoaded", (e) =>{
    menuBtn(".panel-btn", ".panel", ".menu a")
    navBarBtn()
    inputAnimation(".inputs-input")
})


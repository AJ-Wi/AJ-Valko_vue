import { inputAnimation } from "./components/inputs.js"
import { menuBar, menuBtn } from "./components/menuBar.js"
import { navBar, navBarBtn } from "./components/navBar.js"
import { panelBar } from "./components/panelBar.js"
import darkTheme from "./helpers/dark_Theme.js"
import { recepcion } from "./views/recepcion.js"


export function App(){
    const $app = document.getElementById("app")

    $app.appendChild(menuBar())
    $app.appendChild(panelBar())
    $app.appendChild(recepcion())
    $app.appendChild(navBar())  
    darkTheme(".dark-theme-btn", "dark-mode")
}

document.addEventListener("DOMContentLoaded", (e) =>{
    menuBtn(".panel-btn", ".panel", ".menu a")
    navBarBtn()
    inputAnimation(".inputs-input")
})


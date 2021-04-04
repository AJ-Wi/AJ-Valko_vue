import darkTheme from "./assets/js/dark_Theme.js"
import { menuBar, menuBtn } from "./components/menuBar.js"
import { navBar, navBarBtn} from "./components/navBar.js"

const d = document

d.addEventListener("DOMContentLoaded", (e) =>{
    menuBtn(".panel-btn", ".panel", ".menu a")
    navBarBtn()
})

const $navBar = d.getElementById("navbar")
$navBar.appendChild(navBar())

const $menuBar = d.getElementById("menuBar")
$menuBar.appendChild(menuBar())

darkTheme(".dark-theme-btn", "dark-mode")
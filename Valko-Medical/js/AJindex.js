import hamburgerMenu from "./AJmenu.js";
import darkTheme from "./tema_oscuro.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    darkTheme(".dark-theme-btn", "dark-mode")
})
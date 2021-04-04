const d = document

export function menuBtn(panelBtn, panel, menuLink){
    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}

export function menuBar(){
    const menu = d.createElement("nav")
    
    menu.innerHTML = /*html*/ `
        <button class="panel-btn hamburger hamburger--vortex" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <h1>VALKO Medical</h1>
        <button class="dark-theme-btn">🌙</button>
    `
    return menu
}
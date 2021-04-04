export function panelBar(){
    const panel = document.createElement("aside")
    panel.classList.add("panel")

    panel.innerHTML = /*html*/ `
    <nav class="menu">
        <a href="#seccion1">Seccion 1</a>
        <a href="#seccion2">Seccion 2</a>
        <a href="#seccion3">Seccion 3</a>
        <a href="#seccion4">Seccion 4</a>
        <a href="#seccion5">Seccion 5</a>               
    </nav>
    `
    return panel
}
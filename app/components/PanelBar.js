export function panelBar(){
    const panel = document.createElement("aside")
    panel.classList.add("panel")

    panel.innerHTML = /*html*/ `
    <nav class="menu">
        <a href="#/clientes">Clientes</a>
        <a href="#/prestar">prestar / vender</a>
        <a href="#/trackig">traking</a>              
    </nav>
    `
    return panel
}
import {recepcion} from "../views/recepcion.js"

export function Router(){
    const d = document
    const w = window
    const body = d.querySelector("main")

    let {hash} = location

    body.innerHTML = null

    if(!hash || hash === "#/"){
        //loging
    }else if (hash === "#/recepcion"){
        body.appendChild(recepcion())
    }else if (hash === "#/enviar"){
        body.innerHTML = "<h2>enviar</h2>"
    }else if (hash === "#/recibir"){
        body.innerHTML = "<h2>recibir</h2>"
    }else if (hash === "#/entregar"){
        body.innerHTML = "<h2>entregar</h2>"
    }else if (hash === "#/clientes"){
        body.innerHTML = "<h2>clientes</h2>"
    }else if (hash === "#/cliente"){
        body.innerHTML = "<h2>cliente</h2>"
    }else if (hash === "#/prestar"){
        body.innerHTML = "<h2>prestar / Vender</h2>"
    }else if (hash === "#/trackig"){
        body.innerHTML = "<h2>tracking</h2>"
    }else if (hash === "#/seguimiento"){
        body.innerHTML = "<h2>seguimiento</h2>"
    }

}
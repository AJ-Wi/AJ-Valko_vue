import { inputs } from "../components/inputs.js"

export function recepcion(){
    const rec = document.createElement("main")
    const form = document.createElement("form")

    form.appendChild(inputs({
        name: "nombre",
        type: "text",
        required: true,
        text: "Nombre del Paciente"
    }))
    form.appendChild(inputs({
        name: "DNI",
        type: "number",
        required: true,
        text: "DNI del Paciente"
    }))
    form.appendChild(inputs({
        name: "celular",
        type: "tel",
        required: true,
        text: "Telefono"
    }))
    form.appendChild(inputs({
        name: "autorizador",
        type: "text",
        required: true,
        text: "Quien autoriza"
    }))
    form.appendChild(inputs({
        name: "serial",
        type: "text",
        required: true,
        text: "Serial del balon"
    }))
    form.appendChild(inputs({
        name: "marca",
        type: "text",
        required: true,
        text: "Marca del balon"
    }))
    form.appendChild(inputs({
        name: "capacidad",
        type: "radio",
        required: false,
        text: "Capacidad del balon",
        length: 2,
        value: [8,10]
    }))
    form.appendChild(inputs({
        name: "tulipa",
        type: "checkbox",
        required: false,
        text: "Balon con tulipa"
    }))


    rec.appendChild(form)
    return rec
}
const d = document
export function inputs(props){
    let{name, type, required, text, length = 1, value = ""}= props
    const inputControl = d.createElement("div")
    const label = d.createElement("label")
    const input = d.createElement("input")

    inputControl.classList.add("inputs-control")
    if(type === "checkbox" || type === "radio"){
        inputControl.classList.add("selection")
        label.classList.add("label-selection")
        input.classList.add("input-selection")
    }else{
        label.classList.add("inputs-label")
        input.classList.add("inputs-input")
    }
    
    label.setAttribute("for", `${name}`)
    label.innerHTML = `${text}`
    inputControl.appendChild(label.cloneNode(true))
    
    input.name = name
    input.type = type    
    input.required = required

    for(let i = 0; i < length; i++){
        if(type === "radio"){
            input.value = value[i]
            label.innerHTML = `${value[i]}`
            label.classList.add("label-radio")
            inputControl.appendChild(label.cloneNode(true))
        }
        inputControl.appendChild(input.cloneNode(true))
    }
    
    return inputControl
}

export function inputAnimation(inputFocus){
    d.addEventListener("focusin", (e) =>{        
        if(e.target.matches(inputFocus)){
            d.querySelector(`label[for="${e.target.name}"]`).classList.add("inputs-label-focus")

        }       
    })
    d.addEventListener("focusout", (e) =>{
        if(e.target.matches(inputFocus)){
            d.querySelector(`label[for="${e.target.name}"]`).classList.remove("inputs-label-focus")
            let p = e.target.value  
            if(p){
                d.querySelector(`label[for="${e.target.name}"]`).classList.add("inputs-label-active")
            }
        }       
    })
}
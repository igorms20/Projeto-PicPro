
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarElemento)

function identificarElemento(event){
    const li = event.target
    if (li.tagName == "LI"){
        const id = li.id
        const secao1 = document.querySelector(`div[data-id="${id}"]`)
        removerClasse()
        secao1.classList.add("show")
    }
    
}

function removerClasse(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    for (let i = 0; i < divs.length; i ++){
        console.log(divs[i])
        divs[i].classList.remove("show")
    }
}

// tudo ok
function adicionarTarefa(){
    let inputValue = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = inputValue + '<span onclick="deletarTarefa(this)">🗙</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li){
    li.parentElement.remove()
}

function adicionarTarefa(){


    // Recebe o valor inserido no Input
    let inputValue = document.querySelector("input").value.trim();


    // Campo vazio
    if (inputValue == '') {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Cria o item da lista
    let li = document.createElement("li")
    li.innerHTML = inputValue + '<span onclick="deletarTarefa(this)">🗙</span>'
    document.querySelector("ul").appendChild(li)

    // Limpa o campo do input após adicionar a tarefa
    document.querySelector("input").value = ''
}

// Deleta a tarefa
function deletarTarefa(li){
    li.parentElement.remove()
}
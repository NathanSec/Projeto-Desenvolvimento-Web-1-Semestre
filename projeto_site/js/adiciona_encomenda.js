var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // Captura o formulário
    var form = document.querySelector("#form-adiciona");

    // Captura a nova encomenda
    var novaEncomenda = obtemEncomenda(form);

    if(novaEncomenda.nome.lenght < 0){
        alert("Preencha o noem")
        return
    }

    // Captura a tabela de encomendas
    var tabela = document.querySelector("#tabela-clientes");

    // Insere a nova encomenda na tabela
    tabela.appendChild(montaTR(novaEncomenda));

    //Limpa o formulário
    form.reset()
});

// Captura os dados do formulário
function obtemEncomenda(formulario) {
    var encomenda = {
        nome: formulario.querySelector("#nome").value,
        produto: formulario.querySelector("#produto").value,
        qtde: formulario.querySelector("#quantidade").value,
        unitario: formulario.querySelector("#unitario").value
    };

    return encomenda;
}

// Função para criar nova linha
function montaTR(dadosNovaEncomenda) {
    var linha = document.createElement("tr");

    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.produto));
    linha.appendChild(montaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(montaTD(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTD(calcularTotal(dadosNovaEncomenda.qtde, dadosNovaEncomenda.unitario)));

    return linha;
}

// Função para criar nova coluna
function montaTD(dadoColuna) {
    var coluna = document.createElement("td");
    coluna.textContent = dadoColuna;

    return coluna;
}


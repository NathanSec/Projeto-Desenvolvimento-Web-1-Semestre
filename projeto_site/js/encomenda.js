// Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Passe por todas as encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    // Quantidade da encomenda
    var tab_qtde = parseFloat(clientes[count].querySelector(".qtde").textContent);

    // Valor unitário do produto
    var tab_unitario = parseFloat(clientes[count].querySelector(".unitario").textContent);

    // Verifica se a quantidade é válida
    if (isNaN(tab_qtde) || tab_qtde < 1) {
        // A quantidade é menor que 1 ou não é numérica
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida";
        // Linha da tabela fica vermelha
        clientes[count].classList.add("info-invalida");

    } else if (isNaN(tab_unitario) || tab_unitario < 1) {
        // O valor unitário é menor que 1 ou não é numérico
        clientes[count].querySelector(".unitario").textContent = "Valor unitário inválido";
        // Texto fica vermelho
        clientes[count].classList.add("info-unit-invalida");

    } else {
        // Calcula e exibe o total formatado
        var total = calcularTotal(tab_qtde, tab_unitario);
        clientes[count].querySelector(".total").textContent = formataValor(total);
    }
}

// Função de cálculo do valor total
function calcularTotal(qtde, unit) {
    return qtde * unit;
}

// Função para formatar o valor como moeda brasileira
function formataValor(valor) {
    return `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;
}
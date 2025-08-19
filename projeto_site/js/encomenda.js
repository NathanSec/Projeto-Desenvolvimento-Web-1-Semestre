//document.querySelector(".total").textContent=document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent
//Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passe por todas as encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    //Quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;

    //Valor unitário do produto
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;


    //Verifica se a quantidade é válida
    if(tab_qtde < 1 || isNaN(tab_qtde)){
        //A quantidade é menor que 1 ou não é numérica
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida";
        //Linha da tabela fica vermelha
        clientes[count].style.backgroundColor= "red";


    } else if(tab_unitario < 1 || isNaN(tab_unitario)){
        //O valor unitário é menor que 1 ou não é numérico
        clientes[count].querySelector(".unitario").textContent = "Valor unitário inválido";
        //Texto  fica vermelho
        clientes[count].querySelector(".unitario").style.color = "red";

    }
    else {
        //Calcula e exibe o total
        clientes[count].querySelector(".total").textContent = calcularTotal
        (tab_qtde, tab_unitario);
    }
}

//fUNÇÃO DE CALCULO DO VALOR TOTAL
function calcularTotal(qtde, unit) {
    var total = 0;

    total = qtde * unit;

    return total;
}
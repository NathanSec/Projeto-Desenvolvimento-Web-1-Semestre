var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var tr = document.createElement("tr");
    
    var td = document.createElement("td");
    //tr.appendChild(document.createElement('td'));

    tr.appendChild(td);
    document.getElementById("tabela-clientes").appendChild(td);
});
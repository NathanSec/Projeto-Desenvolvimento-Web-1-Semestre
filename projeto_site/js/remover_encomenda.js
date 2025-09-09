var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){

    //Adiciona o efeito na linha
    event.target.parentNode.classList.add("fadeOut");

    //Atrasa a exclusão da linha clicada
    setTimeout(function(){
        //Exclui a linha clicada
        event.target.parentNode.remove()
        },600)

    
})
function Enviar(){
    var nome = document.getElementById("nomeid");
    
    if (nome.value != " "){
        alert('Obrigado ' + nome.value + ', dados enviados com sucesso!');
        console.log("Enviado")
    }
    else{
        alert("Não deixe o campo vazio");
    }
}
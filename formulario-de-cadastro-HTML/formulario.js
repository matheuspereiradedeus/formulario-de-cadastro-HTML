function salvar(){
    if(confirm("Há algo errado!")){
    }
    else{
        alert("Rejeitado");
    }
}

function coletarDados(){
    var nome, email, data, telefone, procura, url, dateTime, time, number, rand, color;
   
    nome = document.meuForm.nome.value;
    email = document.meuForm.email.value;
    data = document.meuForm.data.value;
    telefone = document.meuForm.telefone.value;
    url = document.meuForm.url.value;
     
    if(confirm("Nome: "        + nome     + 
               "\nE-mail: "    + email    +
               "\nData: "      + data     +
               "\nTelefone: "  + telefone +
               "\nProcura: "   + procura  +
               "\nUrl: "       + url      +
               "\nDate Time: " + dateTime + 
               "\nTime: "      + time     + 
               "\nNumber: "    + number   + 
               "\nRand: "      + rand))
    {
        alert("Dados Confirmados");
    }
    else 
    {
        alert("Dados Rejeitados");
    };
}
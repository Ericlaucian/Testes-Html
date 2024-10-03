function printName(){
    const nome = document.getElementById("nome").value;
}

function calcularIdade(){
    const nascimento = document.getElementById("dtNascimento").value;

    var dtNascimento = new Date(nascimento);
    var hoje = new Date;

    if(hoje.getMonth() >= dtNascimento.getMonth() && hoje.getDay() >= dtNascimento.getDay()){
        var idade = hoje.getFullYear() - dtNascimento.getFullYear();
    } else{
        var idade = hoje.getFullYear() - dtNascimento.getFullYear() - 1;
    }

    document.getElementById("print").textContent = idade;
    
}


let idade;


function calcularIdade(){
    const nascimento = document.getElementById("dtNascimento").value;

    let dtNascimento = new Date(nascimento);
    let hoje = new Date;

    if(hoje.getMonth() > dtNascimento.getMonth() && hoje.getDay() > dtNascimento.getDay()){
        idade = hoje.getFullYear() - dtNascimento.getFullYear() - 1;
    } else{
        idade = hoje.getFullYear() - dtNascimento.getFullYear();
    }

}

function Enviar(){
    let nome = document.getElementById("nome").value;
    let linkedIN_url = document.getElementById("linkedIn").value;
    let curso = document.getElementById("opções").value;

    calcularIdade();

    document.getElementById("print").textContent = nome + linkedIN_url + curso + idade;
}

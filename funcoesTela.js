
let idade;
let cursos = [];
let posicaoLista;

function Enviar(){
    let nome = document.getElementById("nome").value;
    let linkedIN_url = document.getElementById("linkedIn").value;

    calcularIdade();

    //document.getElementById("print").textContent = nome + linkedIN_url + idade + "\n" + cursos;
}


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

function TI(){
    const verificar = document.getElementById("TI");
    if(verificar.checked){
        cursos.unshift(document.getElementById("TI").value);
    } else{
        cursos = cursos.filter(function(cursos){return cursos !== "TI"});
    }
    document.getElementById("print").textContent = cursos;
}

function Mecatronica(){
    const verificar = document.getElementById("Mecatronica");
    if(verificar.checked){
        cursos.unshift(document.getElementById("Mecatronica").value);
    } else{
        cursos = cursos.filter(function(cursos){return cursos !== "Mecatronica"});
    }
    document.getElementById("print").textContent = cursos;
}

function Automacao(){
    const verificar = document.getElementById("Automacao");
    if(verificar.checked){
        cursos.unshift(document.getElementById("Automacao").value);
    } else{
        cursos = cursos.filter(function(cursos){return cursos !== "Automacao"});
    }
    document.getElementById("print").textContent = cursos;
}

function ADM(){
    const verificar = document.getElementById("ADM");
    if(verificar.checked){
        cursos.unshift(document.getElementById("ADM").value);
    } else{
        cursos = cursos.filter(function(cursos){return cursos !== "ADM"});
    }
    document.getElementById("print").textContent = cursos;
}

function fotoDePerfil(event){
    let foto = document.getElementById('foto-de-perfil');
    foto.scr = URL.createObjectURL(event.target.files[0]);
    foto.style.display = 'block';
}





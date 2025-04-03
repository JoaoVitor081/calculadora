const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", ()=>{
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let soma = parseInt(valor1) + parseInt(valor2);
    document.getElementById("resultado").innerHTML = soma;
});

const btnSubtracao = document.getElementById("subtrair");
btnSubtracao.addEventListener("click", ()=>{
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let subtracao = parseInt(valor1) - parseInt(valor2);
    document.getElementById("resultado").innerHTML = subtracao;
});

const btnMultiplicacao = document.getElementById("multiplicar");
btnMultiplicacao.addEventListener("click", ()=>{
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let Multiplicacao = parseInt(valor1) * parseInt(valor2);
    document.getElementById("resultado").innerHTML = Multiplicacao;
});

const btnDivisao = document.getElementById("dividir");
btnDivisao.addEventListener("click", ()=>{
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let Divisao = parseInt(valor1) / parseInt(valor2);
    document.getElementById("resultado").innerHTML = Divisao;
});

let display = "";
function show(numero) {
    display = display+numero;
    document.getElementById("tela").innerHTML = display;
}

function resultado(){
    let resultado = eval(display);
    document.getElementById("tela").innerHTML = resultado;
}

function clear(){
    alert("limpa");
    let display = "";
    document.getElementById("tela").innerHTML = display; 
}
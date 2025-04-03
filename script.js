let display = "";

function show(numero) {
    display += numero;
    document.getElementById("tela").innerHTML = display;
}

function clearDisplay() {
    display = "";
    document.getElementById("tela").innerHTML = "0";
}

function backspace() {
    display = display.slice(0, -1); 
    if (display === "") {
        display = "0"; 
    }
    document.getElementById("tela").innerHTML = display;
}

function resultado() {
    try {
        let result = eval(display);
        document.getElementById("tela").innerHTML = result;
        display = result.toString();
    } catch (error) {
        document.getElementById("tela").innerHTML = "Erro";
    }
}

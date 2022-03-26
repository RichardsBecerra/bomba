$(document).ready(paginaLista);

console.log("Cargando página...");

var countVars = [countVar1, countVar2]
var countVar1 = 10;
var countVar2 = 10;
var estadoBombas = [estadoBomba1, estadoBomba2]
var estadoBomba1;
var estadoBomba2;

function paginaLista() {
    
    estadoBomba1 = "prendida";
    $("#countDisplay1").html(countVar1);
    $("#btn1").click(stop);

    //Aqui comienza segundo timer
    estadoBomba2 = "apagada"
    $("#countDisplay2").html("apagada");
    $("#btn2").click(stop);

    setTimeout(espera, 500);
}

function stop(element) {

    var idBotonClickeado = element.target.id

    if (idBotonClickeado == "btn1"){
        estadoBomba1 = "apagada"; 
    }
    else if (idBotonClickeado == "btn2"){
        estadoBomba2 = "apagada";
    }

console.log = element
}

function espera() {

    if (estadoBomba1 == "prendida") {
        if (countVar1 > 0) {
            countVar1--;
            $("#countDisplay1").html(countVar1);

        } else {
            $("#bombaContainer1").css(
                "background-image",
                "url(https://www.kindpng.com/picc/m/5-54003_transparent-background-cartoon-explosion-hd-png-download.png)"
            );
        }
    }
    //if de la segunda bomba
    if (estadoBomba2 == "prendida") {
        if (countVar2 > 0) {
            countVar2--;
            $("#countDisplay2").html(countVar2);

        } else {
            $("#bombaContainer2").css(
                "background-image",
                "url(https://www.kindpng.com/picc/m/5-54003_transparent-background-cartoon-explosion-hd-png-download.png)"
            );
        }
    }
    setTimeout(espera, 500)
    console.log("Entro en espera");
}

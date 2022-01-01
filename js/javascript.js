//la puntuacion debe de ser una variable fuera de las funciones para que siemrpe empice el juego desde 0
function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
}

var contador = 0;

function mostrarCarta(fila) {

    console.log("entrando mostrar");


    if (fila == "fila1") {
        document.getElementById('carta1').src = "../img/carta1.png";
    } else if (fila == "fila2") {
        document.getElementById('carta2').src = "../img/carta2.png";
    } else if (fila == "fila3") {
        document.getElementById('carta3').src = "../img/carta3.png";
    } else if (fila == "fila4") {
        document.getElementById('carta4').src = "../img/carta4.png";
    } else if (fila == "fila5") {
        document.getElementById('carta5').src = "../img/carta2.png";
    } else if (fila == "fila6") {
        document.getElementById('carta6').src = "../img/carta3.png";
    } else if (fila == "fila7") {
        document.getElementById('carta7').src = "../img/carta4.png";
    } else if (fila == "fila8") {
        document.getElementById('carta8').src = "../img/carta1.png";
    }


    comprobarCarta(fila);



}

function ocultarCarta(fila) {
    syncDelay(1000);
    console.log("entrando en ocultar carta con la fila" + fila);
    if (fila == "fila1") {
        document.getElementById('carta1').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila2") {
        document.getElementById('carta2').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila3") {
        document.getElementById('carta3').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila4") {
        document.getElementById('carta4').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila5") {
        document.getElementById('carta5').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila6") {
        document.getElementById('carta6').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila7") {
        document.getElementById('carta7').src = "../img/carta_bocaabajo.jpg";
    } else if (fila == "fila8") {
        document.getElementById('carta8').src = "../img/carta_bocaabajo.jpg";
    }

}




var puntuacion = 0;

var carta1Id = undefined;
var carta2Id = undefined;
var cartaclase1 = undefined;
var cartaclase2 = undefined;


function comprobarCarta(fila) {
    contador++;
    console.log(contador);
    if (contador == 1) {
        console.log("primer if comprobar carta");
        var ele = document.getElementById(fila);

        carta1Id = fila
        cartaclase1 = ele.className;


    } else if (contador == 2) {

        console.log("segundo if comprobar carta");
        var ele = document.getElementById(fila);

        carta2Id = fila
        cartaclase2 = ele.className;

    }
    console.log(carta1Id);
    console.log(cartaclase1);
    console.log(carta2Id);
    console.log(cartaclase2);
    if (carta1Id != carta2Id && cartaclase1 == cartaclase2 && (cartaclase1 || cartaclase2 != undefined)) {
        console.log("LAS CARTAS SON IGUALES");
        puntuacion++;
        contador = 0;
        carta1Id = undefined;
        carta2Id = undefined;
        cartaclase1 = undefined;
        cartaclase2 = undefined;
        console.log(puntuacion);
    } else if (contador == 2) {
        ocultarCarta(carta1Id);
        ocultarCarta(carta2Id);
        contador = 0;
        carta1Id = undefined;
        carta2Id = undefined;
        cartaclase1 = undefined;
        cartaclase2 = undefined;

    }
}
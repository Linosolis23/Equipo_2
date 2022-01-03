<<<<<<< HEAD
//variable para contar los numeros de clicks
var contador = 0;
// variable con la puntuacion
var puntuacion = 0;
//array para guardas las cartas que coinciden
var cartasacertadas = [];
//array para guardar las filas
var filasCartas = [];
// funcion para comprobar si las cartas se han destapado
function comprobanteCarta(carta) {

    var boleanoCarta = false;
    for (let index = 0; index < cartasacertadas.length; index++) {
        if (carta == cartasacertadas[index]) {
            console.log("dentro del for de cartas");
            boleanoCarta = true;
        }
    }

    console.log(boleanoCarta);
    return boleanoCarta;
}


function comprobanteFila(fila) {
    var boleanoFila = false;
    for (let index = 0; index < filasCartas.length; index++) {
        if (fila == filasCartas[index]) {
            console.log("dentro del for de filas");
            boleanoFila = true;
        }

    }
    console.log(boleanoFila);
    return boleanoFila;

}
//funcion que genera numero random
function numeroRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
=======
//la puntuacion debe de ser una variable fuera de las funciones para que siemrpe empice el juego desde 0
function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
>>>>>>> parent of 299a6b0 (Bugs arreglados)
}

var contador = 0;

function mostrarCarta(fila) {

    //comprobamos si la fila ya esta en el array de filas llamadas
    if (comprobanteFila(fila) == false) {

        console.log("entrando mostrar");

<<<<<<< HEAD
        var numeroAleatorio = numeroRandom(0, 4);

        var lastChar = fila.substr(fila.length - 1);

        var cartaDestapada = document.getElementById('carta' + lastChar).src = "../img/carta" + numeroAleatorio + ".png";

        while (comprobanteCarta(cartaDestapada) == true) {
            console.log("dentro del while");
            var numeroAleatorio = numeroRandom(0, 4);

            var cartaDestapada = document.getElementById('carta' + lastChar).src = "../img/carta" + numeroAleatorio + ".png";
=======
    comprobarCarta(fila);
>>>>>>> parent of 299a6b0 (Bugs arreglados)

        }

    }
    //llamamos a la funcion para comprobar las cartas
    console.log("Esta es la fila que entra en comprobar fila " + fila);
    console.log("Esta es la carta que entra en comprobar carta " + cartaDestapada);
    comprobarCarta(fila, cartaDestapada);

}

function ocultarCarta(fila) {

    var lastChar = fila.substr(fila.length - 1);

    document.getElementById('carta' + lastChar).src = "../img/carta_bocaabajo.jpg";
}




<<<<<<< HEAD

//variables necesarias para las cartas
var filaCarta1 = undefined;
var filaCarta2 = undefined;
=======
var puntuacion = 0;

var carta1Id = undefined;
var carta2Id = undefined;
>>>>>>> parent of 299a6b0 (Bugs arreglados)
var cartaclase1 = undefined;
var cartaclase2 = undefined;
cartaNombre1 = undefined;
cartaNombre2 = undefined;


<<<<<<< HEAD
//funcion que comprueba las cartas
function comprobarCarta(fila, cartaDestapada) {
    console.log(fila);
    contador++;
    console.log("variables inicio funcion");

    if (filaCarta1 == undefined) {
=======
function comprobarCarta(fila) {
    contador++;
    console.log(contador);
    if (contador == 1) {
>>>>>>> parent of 299a6b0 (Bugs arreglados)
        console.log("primer if comprobar carta");


        filaCarta1 = fila
        cartaNombre1 = cartaDestapada;

<<<<<<< HEAD
    } else if (filaCarta2 == undefined) {
=======
    } else if (contador == 2) {
>>>>>>> parent of 299a6b0 (Bugs arreglados)

        console.log("segundo if comprobar carta");


        filaCarta2 = fila;
        cartaNombre2 = cartaDestapada;

    }
<<<<<<< HEAD

    console.log("variables despues de los if de undefined");

    if (contador == 2) {

        if (filaCarta1 != filaCarta2 && cartaNombre1 == cartaNombre2 && (cartaNombre1 || cartaNombre2 != undefined)) {
            console.log("LAS CARTAS SON IGUALES");
            puntuacion++;

            cartasacertadas.push(cartaNombre1);
            cartasacertadas.push(cartaNombre2);

            filasCartas.push(filaCarta1);
            filasCartas.push(filaCarta2);

            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;
            console.log(puntuacion);
            contador = 0;
        } else if (comprobanteFila(filaCarta1) == false && comprobanteFila(filaCarta2) == true) {
            console.log("Ocultando la carta del primer click que no esta levantada");
            setTimeout(ocultarCarta, 300, filaCarta1);
            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

            contador = 0;
        } else if (comprobanteFila(filaCarta1) == true && comprobanteFila(filaCarta2) == false) {
            console.log("Ocultando la carta del segundo click que no esta levantada");
            setTimeout(ocultarCarta, 300, filaCarta2);
            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

            contador = 0;

        } else if (cartaNombre1 == undefined && cartaNombre2 == undefined) {
            console.log("LAS CARTAS ya estan levantadas");


            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

            contador = 0;

        } else if (filaCarta1 != undefined && filaCarta2 != undefined) { // && comprobante(filaCarta1) == false && comprobante(filaCarta2) == false) {
            console.log("ocultar las dos cartas");
            setTimeout(ocultarCarta, 300, filaCarta1);
            setTimeout(ocultarCarta, 300, filaCarta2);
            contador = 0;
            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

        }


=======
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
        setTimeout(ocultarCarta, 300, carta1Id);
        setTimeout(ocultarCarta, 300, carta2Id);
        contador = 0;
        carta1Id = undefined;
        carta2Id = undefined;
        cartaclase1 = undefined;
        cartaclase2 = undefined;

>>>>>>> parent of 299a6b0 (Bugs arreglados)
    }
}
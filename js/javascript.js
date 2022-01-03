//variable para contar los numeros de clicks
var contador = 0;
// variable con la puntuacion
var puntuacion = 0;
//array para guardas las cartas que coinciden
const cartasacertadas = [];
//array para guardar las filas ya destapadas
const filasCartas = [];

function comprobanteFila(fila) {
    var boleanoFila = false;
    for (let index = 0; index < filasCartas.length; index++) {
        if (fila == filasCartas[index]) {

            boleanoFila = true;
        }

    }

    return boleanoFila;

}
// funcion para comprobar si las cartas se han destapado
function comprobante(cartaFila) {
    var boleano = false;
    for (let index = 0; index < cartasacertadas.length; index++) {
        console.log("dentro del for");
        console.log("este es la carta " + cartaFila);
        if (cartaFila == cartasacertadas[index]) {
            boleano = true;
        }
    }
    console.log(boleano);
    return boleano;
}

var lista = [1, 2, 3, 4, 1, 2, 3, 4];
//funcion para barajar las cartas
function mezclarCartas() {

    lista = lista.sort(function() { return Math.random() - 0.5 });


}

//funcion para mostrar las cartas boca arriba
function mostrarCarta(fila) {


    console.log("entrando mostrar");
    var cartaDestapada = "";
    if (fila == "fila1") {
        console.log(lista[0]);
        var cartaDestapada = document.getElementById('carta1').src = "../img/carta" + lista[0] + ".png";
    } else if (fila == "fila2") {
        console.log(lista[1]);
        var cartaDestapada = document.getElementById('carta2').src = "../img/carta" + lista[1] + ".png";
    } else if (fila == "fila3") {
        console.log(lista[2]);
        var cartaDestapada = document.getElementById('carta3').src = "../img/carta" + lista[2] + ".png";
    } else if (fila == "fila4") {
        console.log(lista[3]);
        var cartaDestapada = document.getElementById('carta4').src = "../img/carta" + lista[3] + ".png";
    } else if (fila == "fila5") {
        console.log(lista[4]);
        var cartaDestapada = document.getElementById('carta5').src = "../img/carta" + lista[4] + ".png";
    } else if (fila == "fila6") {
        console.log(lista[5]);
        var cartaDestapada = document.getElementById('carta6').src = "../img/carta" + lista[5] + ".png";
    } else if (fila == "fila7") {
        console.log(lista[6]);
        var cartaDestapada = document.getElementById('carta7').src = "../img/carta" + lista[6] + ".png";
    } else if (fila == "fila8") {
        console.log(lista[7]);
        var cartaDestapada = document.getElementById('carta8').src = "../img/carta" + lista[7] + ".png";
    }


    //llamamos a la funcion para comprobar las cartas
    console.log(cartaDestapada);
    console.log(fila);
    comprobarCarta(fila, cartaDestapada);



}

//funcion para ocultar las cartas
function ocultarCarta(fila) {
    //sacamos el ultimo caracter de fila 
    var lastChar = fila.substr(fila.length - 1);
    //ocultamos la carta con el ultimo valor de las filas clicadas
    document.getElementById('carta' + lastChar).src = "../img/carta_bocaabajo.jpg";

}


//variables necesarias para las cartas
var filaCarta1 = undefined;
var filaCarta2 = undefined;

var cartaNombre1 = undefined;
var cartaNombre2 = undefined;


//funcion que comprueba las cartas
//funcion que comprueba las cartas
function comprobarCarta(fila, cartaDestapada) {
    console.log(fila);
    contador++;
    console.log("variables inicio funcion");

    if (filaCarta1 == undefined) {
        console.log("primer if comprobar carta");


        filaCarta1 = fila
        cartaNombre1 = cartaDestapada;

    } else if (filaCarta2 == undefined) {

        console.log("segundo if comprobar carta");


        filaCarta2 = fila;
        cartaNombre2 = cartaDestapada;

    }

    console.log("variables despues de los if de undefined");

    if (contador == 2) {

        console.log(filaCarta1);
        console.log(cartaNombre1);
        console.log(filaCarta2);
        console.log(cartaNombre2);
        if (comprobanteFila(filaCarta1) == false && comprobanteFila(filaCarta2) == false && filaCarta1 != filaCarta2 && cartaNombre1 == cartaNombre2 && (cartaNombre1 || cartaNombre2 != undefined)) {
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

        } else if (comprobanteFila(filaCarta1) == true && comprobanteFila(filaCarta2) == true) {
            console.log("LAS CARTAS ya estan levantadas");


            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

            contador = 0;

        } else if (filaCarta1 != undefined && filaCarta2 != undefined) {
            console.log("ocultar las dos cartas");
            setTimeout(ocultarCarta, 300, filaCarta1);
            setTimeout(ocultarCarta, 300, filaCarta2);
            console.log(filaCarta1);
            console.log(filaCarta2);
            console.log(cartaNombre1);
            console.log(cartaNombre2);
            contador = 0;
            filaCarta1 = undefined;
            filaCarta2 = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            cartaNombre1 = undefined;
            cartaNombre2 = undefined;

        }


    }
}
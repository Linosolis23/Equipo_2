//variable para contar los numeros de clicks
var contador = 0;
// variable con la puntuacion
var puntuacion = 0;
//array para guardas las cartas que coinciden
var cartasacertadas = [];
// funcion para comprobar si las cartas se han destapado
function comprobante(carta) {
    var boleano = false;
    for (let index = 0; index < cartasacertadas.length; index++) {
        console.log("dentro del for");
        console.log("este es la carta 1" + carta);
        if (carta == cartasacertadas[index]) {
            return boleano = true;
        }
    }
    return boleano;
}

//funcion para mostrar las cartas boca arriba
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


    //llamamos a la funcion para comprobar las cartas
    comprobarCarta(fila);



}

//funcion para ocultar las cartas
function ocultarCarta(fila) {
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


//variables necesarias para las cartas
var carta1Id = undefined;
var carta2Id = undefined;
var cartaclase1 = undefined;
var cartaclase2 = undefined;


//funcion que comprueba las cartas
function comprobarCarta(fila) {
    contador++;
    console.log("variables inicio funcion");
    console.log(carta1Id);
    console.log(cartaclase1);
    console.log(carta2Id);
    console.log(cartaclase2);

    if (carta1Id == undefined) {
        console.log("primer if comprobar carta");
        var ele = document.getElementById(fila);

        carta1Id = fila
        cartaclase1 = ele.className;


    } else if (carta2Id == undefined) {

        console.log("segundo if comprobar carta");
        var ele = document.getElementById(fila);

        carta2Id = fila
        cartaclase2 = ele.className;

    }

    console.log("variables despues de los if de undefined");
    console.log(carta1Id);
    console.log(cartaclase1);
    console.log(carta2Id);
    console.log(cartaclase2);
    console.log(comprobante(carta1Id));

    if (contador == 2) {

        if (comprobante(carta1Id) == true && comprobante(carta2Id) == true) {
            console.log("coinciden cartas");

            carta1Id = undefined;
            carta2Id = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            contador = 0;
        } else if (comprobante(carta1Id) == false && comprobante(carta2Id) == true) {
            console.log("dentro del 2 if de cartas acertadas");
            setTimeout(ocultarCarta, 300, carta1Id);
            carta1Id = undefined;
            carta2Id = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            contador = 0;
        } else if (comprobante(carta2Id) == false && comprobante(carta1Id) == true) {
            console.log("dentro del 3 if de cartas acertadas");
            setTimeout(ocultarCarta, 300, carta2Id);
            carta1Id = undefined;
            carta2Id = undefined;
            cartaclase1 = undefined;
            cartaclase2 = undefined;
            contador = 0;

        }

    }

    if (carta1Id != carta2Id && cartaclase1 == cartaclase2 && (cartaclase1 || cartaclase2 != undefined)) {
        console.log("LAS CARTAS SON IGUALES");
        puntuacion++;
        cartasacertadas.push(carta1Id);
        cartasacertadas.push(carta2Id);

        carta1Id = undefined;
        carta2Id = undefined;
        cartaclase1 = undefined;
        cartaclase2 = undefined;
        console.log(puntuacion);
        contador = 0;
    } else if (carta1Id != undefined && carta2Id != undefined) {

        setTimeout(ocultarCarta, 300, carta1Id);
        setTimeout(ocultarCarta, 300, carta2Id);
        contador = 0;
        carta1Id = undefined;
        carta2Id = undefined;
        cartaclase1 = undefined;
        cartaclase2 = undefined;

    }



}
//la puntuacion debe de ser una variable fuera de las funciones para que siemrpe empice el juego desde 0
function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
}


function mostrarCarta(fila) {

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


}

function ocultarCarta(fila) {

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
var carta1;
var carta2;
var cartafila1;
var cartafila2;

function comprobarCarta(fila) {

    if (carta1 == undefined) {
        var ele1 = document.getElementById(fila);

        console.log("1 if");
        carta1 = ele1.className;

        cartafila1 = fila;
        console.log(carta1);
        console.log(mostrarCarta(fila));
        mostrarCarta(cartafila1);

    } else if (carta2 == undefined) {


        var ele2 = document.getElementById(fila);

        console.log("2 if");

        carta2 = ele2.className;
        cartafila2 = fila
        console.log(carta1);
        console.log(carta2);
        console.log(fila);
        console.log(cartafila1);

        console.log(cartafila2);
        mostrarCarta(cartafila2);


        if (carta1 == carta2 && (cartafila1 != cartafila2)) {
            console.log("entrando if de clases");

            carta1 = undefined;
            carta2 = undefined;
            cartafila1 = undefined;
            cartafila2 = undefined;
            puntuacion++;

        } else {
            syncDelay(2000);
            console.log("ocultar carta");
            console.log(cartafila1);
            console.log(cartafila2);

            ocultarCarta(cartafila1);

            ocultarCarta(cartafila2);
            syncDelay(2000);
            carta1 = undefined;
            carta2 = undefined;
            cartafila1 = undefined;
            cartafila2 = undefined;

        }

    }


}
// if (carta1 && carta2 == undefined) {
//     console.log(carta1);
//     console.log(carta2);

// } else {


//     var carta1 = mostrarCarta(fila);
//     var carta2 = mostrarCarta(fila);
//     console.log(carta1);
//     console.log(carta2);

//     if (carta1 == carta2) {
//         return puntuacion++;
//     } else {
//         ocultarCarta(carta1);
//         ocultarCarta(carta2);
//     }

// }


// function comprobarCarta(fila, clase) {
//     var carta1Fila;
//     var carta2Fila;
//     console.log(puntuacion);
//     console.log(clase);
//     console.log(fila);
//     console.log(carta1Fila);
//     console.log(carta2Fila);

//     if (carta1Fila == undefined) {
//        

//         mostrarCarta(fila);

//         carta1Fila = fila;
//         carta1Clase = clase;
//         console.log("entrando 1 if");

//         ele1.removeEventListener("click", mostrarCarta);
//     } else if (carta2Fila == undefined) {
//         var ele2 = document.getElementById(fila);
//         ele2.addEventListener("click", mostrarCarta);
//         mostrarCarta(fila);

//         carta2Fila = fila;
//         carta2Clase = clase;
//         console.log(carta1Fila);
//         console.log(carta2Fila);
//         ele2.removeEventListener("click", mostrarCarta);
//         console.log(carta1Clase);
//         console.log(carta2Clase);
//         if (carta1Clase == carta2Clase) {
//             var carta1Fila = undefined;
//             var carta1Clase = undefined;
//             var carta2Fila = undefined;
//             var carta2Clase = undefined;
//             return puntuacion++;
//         } else {
//             console.log("probando");
//             ocultarCarta(carta1Fila);
//             ocultarCarta(carta2Fila);

//         }

//     }
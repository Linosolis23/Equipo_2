/*llamamos a todas las funciones*/

function juego() {
    iniciarTablero();
    cronometro();
    niveles();
    iniciarCartas();
    // guardarPuntuacion()
}

var nombre;
var dificultad;
var numtotalcartas;
/*variables de tiempo*/
var min;
var seg;



function nombrejugador() {
    nombre = document.getElementById("nombrejuga").value;
    document.getElementById("nombreplayer").innerHTML = nombre;
    // var dificultad = document.getElementById("dificultad").value;
}

function guardarPuntuacion() {

    if (localStorage.getItem(nombre) != null) {
        var puntuaciontotal = parseInt(localStorage.getItem(nombre)) + parseInt(puntuacion);
        localStorage.setItem(nombre, puntuaciontotal);
    } else {
        localStorage.setItem(nombre, puntuacion);
    }
}

function niveles() {
    dificultad = document.getElementById("dificultad").value;

    if (dificultad == 1) {

        numtotalcartas = 3;
        min = 1;
        seg = 60;
        puntuaciontotal = 6;

    } else if (dificultad == 2) {
        numtotalcartas = 4;
        min = 1;
        seg = 60;
        puntuaciontotal = 8;

    } else if (dificultad == 3) {
        numtotalcartas = 5;
        min = 2;
        seg = 60;
        puntuaciontotal = 10;
    } else if (dificultad == 4) {
        numtotalcartas = 7;
        min = 2;
        seg = 60;
        puntuaciontotal = 14;
    }

}


//este es el array donde guardamos las cartas que se les ha dado la vuelta
var cartasvistas = [];

//variable que cuenta el numero de intentos de juntar las parejas
var intentos = 0;

//variable para contar los numeros de clicks
var contador = 0;

// variable con la puntuacion
var puntuacion = 0;
var puntuaciontotal = 0;

//creo un array vacio para guardar las cartas
const cartas = [];

//es un array con el id de las cartas de modo que estan todos sus numeros aqui
var idsaleatorios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function iniciarTablero() {

    document.getElementById("tablero").setAttribute("style", "display: none");
    document.getElementById("game").style.display = "initial";
}
//funcion que crea las cartas
function iniciarCartas() {

    //creo un constructor cartas, que guarda el id que sera un numero, el girada que será false por defecto y el src de la imagen que será igual al id.
    class Carta {
        constructor(id, girada) {
            this.id = id;
            this.girada = girada;
            this.src = "../img/carta" + id + ".png";
        }
    }

    //desordenamos el array de id de cartas 
    idsaleatorios.sort((a, b) => 0.5 - Math.random());

    //creo una carta con el id que se le pasa 1, 2, 3... y la añado dos veces porque necesitamos dos iguales

    for (var i = 1; i <= numtotalcartas; i++) {
        const cart = new Carta(idsaleatorios[i], false);
        cartas.push(cart);
        cartas.push(cart);
    }

    cartas.concat(cartas);
    ordenaleatorio();

}

function ordenaleatorio() {
    /*con esta funcion ordenamos el array de modo aleatorio ya que la 2º funcion nos devuelve numeros positivos y negativos
     colocandolos delante de cada valor desordenandolos.
    */


    //las ordeno de forma aleatoria
    cartas.sort((a, b) => 0.5 - Math.random());
    //recorre el array de cartas e imprime la baraja

    for (var j = 0; j < cartas.length; j++) {
        document.getElementById("demo").innerHTML +=

            "<img id='cartabocaarriba" + j + "' src='" + cartas[j].src + "' onclick='ocultarCarta(" + j + ")' style= 'display:none'>" +
            "<img  id='cartabocaabajo" + j + "'src='../img/carta_bocaabajo.jpg' onclick='mostrarCarta(" + j + ")'>";


    }


}

function mostrarCarta(idcarta) {
    //asi cambiamos el atributo de la carta entrante
    //ahora queda borrar el onclick una vez se clica

    cartas[idcarta].girada = true;

    //asi eliminamos el onclick
    document.getElementById("cartabocaarriba" + idcarta).removeAttribute("onclick");

    document.getElementById("cartabocaarriba" + idcarta).removeAttribute("style");
    document.getElementById("cartabocaabajo" + idcarta).setAttribute("style", "display: none");

    //FUNCION FUTURA

    cartasGiradas(cartas[idcarta].id, idcarta);


}

function ocultarCarta(idcarta) {

    cartas[idcarta].girada = false;



    document.getElementById("cartabocaarriba" + idcarta).setAttribute("style", "display: none");

    document.getElementById("cartabocaabajo" + idcarta).removeAttribute("style");

}

var posicion = [];

function cartasGiradas(idcarta, posicioncarta) {



    cartasvistas.push(idcarta);
    posicion.push(posicioncarta);

    if (cartasvistas.length == 2) {

        var bolean = comprobarCartas(cartasvistas[0], cartasvistas[1]);
        if (bolean) {
            sumarPuntos();
            cartasvistas = [];
            posicion = [];


            setTimeout(terminarjuego, 200);

        } else {
            setTimeout(ocultarCarta, 300, posicion[0]);
            setTimeout(ocultarCarta, 300, posicion[1]);
            cartasvistas = [];
            posicion = [];

        }

    }

}


function comprobarCartas(carta1, carta2) {

    if (carta1 == carta2)
        return true;

    else
        return false;
}



var carta1;
var carta2;


function seleccionarcarta() {
    if (girada = false) {
        carta1 = j;
    } else {
        carta2 = j;
    }

}

function terminarjuego() {

    if (puntuacion == puntuaciontotal) {
        alert("Te quedó de tiempo: " + m.innerHTML + ":" + s.innerHTML);
        alert("tu puntuacion ha sido " + puntuacion);
        alert("Gracias por participar");
        guardarPuntuacion();
        document.location.href = "index.html";

    }


    //DE ESTA MANERA SE TERMINA EL JUEGO CON EL TOTAL DE CARTAS
    //     var contadorCartas = 0;
    //     for (let index = 0; index < cartas.length; index++) {

    //         if (cartas[index].girada == true) {

    //             contadorCartas++;
    //             console.log(contadorCartas);
    //         }

    //     }
    //     console.log(contadorCartas);
    //     console.log(cartas.length);
    //     if (contadorCartas == cartas.length) {
    //         alert("YOU WIN");
    //         document.location.href = "index.html";

    //     }
}
// /*creamos la funcion cronometro*/
function cronometro() {

    /*ingresamos los valores en el html*/
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");

    /*creamos una funcion para que corra el tiempo*/
    tiempoGame = setInterval(function() {
            seg--;

            /*conversor de segundos a minutos*/
            if (seg == 00) {
                seg = 60;
                min--;

            }
            //QUITARLO LUEGO
            if (min == 00 && seg == 01) {

                alert("GAME OVER El tiempo llegó a 0");
                alert("tu puntuacion ha sido " + puntuacion);
                document.location.href = "index.html";
            }
            /*convertimos los segundos en 2 digitos*/
            /*esto hace que hasta que no sea 9 haya un 0 a la izquierda*/
            var segundos = seg <= 9 ? '0' + seg : seg;
            var minuntos = min <= 9 ? '0' + min : min;
            /*le decimos al html que coga el tiempo*/
            s.innerHTML = segundos;
            m.innerHTML = minuntos;

        }
        /*1000 milisegundos son 1 segundo*/
        , 1000);
}

function sumarPuntos() {
    puntuacion += 2;

}
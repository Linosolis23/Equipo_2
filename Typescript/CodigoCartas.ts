//variable que cuenta el numero de intentos de juntar las parejas
var intentos:number = 0;

/*llamamos a todas las funciones*/
function juego(){
    mezclarCartas();
    cronometro();   
}

//variable que cuenta el numero de intentos de juntar las parejas
var intentos:number = 0;

//variable para contar los numeros de clicks
var contador:number = 0;

// variable con la puntuacion
var puntuacion:number = 0;

//array para guardar las filas ya destapadas
const filasCartas:number[] =[1];

// array con el numero de cartas para barajarlas
//no podemos hacerlo const ya que entonces no nos dejaria desordenarlos
var lista:number[] = [1, 2, 3, 4, 1, 2, 3, 4];



//variables necesarias para las cartas
var filaCarta1:number =0;
var filaCarta2:number =0;
var dibujoCarta1:string ="0";
var dibujoCarta2:string ="0";

//funcion que comprueba si las filas ya han sido clicadas
function comprobanteFila(fila:number) {

    var boleanoFila:boolean = false;
    //recorremos el array de filasCartas comprobando que las filas no han sido ya destapadas
    for (let index = 0; index < filasCartas.toString.length; index++) {
        if (fila == filasCartas[index]) {
            //si las filas ya estan destapadas cambiamos la variable boleana a true
            boleanoFila = true;
        }
    }
    return boleanoFila;
}

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//


//funcion para barajar las cartas
var mezclarCartas = function () {
    /*con esta funcion ordenamos el array de modo aleatorio ya que la 2º funcion nos devuelve numeros positivos y negativos
     colocandolos delante de cada valor desordenandolos.
    */
    lista = lista.sort(function() { return Math.random() - 0.5 });  
}

//funcion para mostrar las cartas boca arriba
//Cambiar any
var mostrarCarta = function (fila:any) {
    var cartaDestapada:string;
    var lastChar:number = fila[fila.length - 1];
    //(lastChar as unknown) as String;
    //var cartaDestapada:string = document.getElementById('carta' + lastChar)!.src = "../img/carta" + lista[lastChar - 1] + ".png";
    var cartaDestapada = (<HTMLInputElement>document.getElementById('carta' + lastChar)).src= "../img/carta" + lista[lastChar - 1] + ".png";

    //llamamos a la funcion para comprobar las cartas pasandole la fila clicada y la carta destapada
    comprobarCarta(fila, cartaDestapada);
}

//funcion para ocultar las cartas
var ocultarCarta = function (fila:number[]) {
    //sacamos el ultimo caracter de fila 
    var lastChar = fila[fila.length - 1];
    //ocultamos la carta con el ultimo valor de las filas clicadas
    //document.getElementById('carta' + lastChar)!.src = "../img/carta_bocaabajo.jpg";
    var inputValue = (<HTMLInputElement>document.getElementById('carta' + lastChar)).src= "../img/carta_bocaabajo.jpg";
    return inputValue;
}   

//funcion para guardar las variables de las cartas
var guardaCartas = function (fila:number, cartaDestapada:string) {
    /*si la variable filaCarta1 no esta definida entra en este if primero
    y la define, cuando esta se encuentra definida entra en el else definiendo la 2º
    */
    if (filaCarta1 == 0) {
        //en esta variable guardamos el numero de la fila clicada
        filaCarta1 = fila;
        //en esta guardamos el dibujo que se encuentra en ella
        dibujoCarta1 = cartaDestapada;
    } else {
        //en esta variable guardamos el numero de la fila clicada
        filaCarta2 = fila;
        //en esta guardamos el dibujo que se encuentra en ella
        dibujoCarta2 = cartaDestapada;
    }
}

//funcion que comprueba el final del juego
var comprobarFinalJuego = function () {
    var boleanoFinal:Boolean = false
    //comprobamos que todas las cartas estan guardadas en el array y si es asi ha finalizado el juego
    //convierto a tu string porque .length no funciona con Numbers
    if (filasCartas.toString.length == 8) {
        alert("Juego Finalizado con un total de " + intentos + " intentos.");
        //alert("Has tardado "+m.innerHTML+":"+s.innerHTML);
        alert("Gracias por participar");

        document.location.href="../index.html";
        boleanoFinal = true;
    }
    return boleanoFinal;
}

//funcion que comprueba las cartas
var comprobarCarta = function (fila:number, cartaDestapada:string) {
    //añadimos este if para evitar que el jugador pueda volver a seleccionar cartas
    if (comprobarFinalJuego() == false) {
        //sumamos un punto a contador de click
        contador++;
        //esta funcion recoje los valores de las cartas y los guarda en las variables locales para compararlas
        guardaCartas(fila, cartaDestapada);
        //si nuestro contador es igual a 2 es que hemos realizado dos clicks y entonces podemos comparar las cartas
        if (contador == 2) {
            intentos++;
            /*comprobamos que la fila 1 y 2 no se encuentran ya levantadas, ademas de que el jugador no haya pulsado dos veces sobre la misma carta
            si ambas condiciones se cumplen y ademas los dibujos de las cartas son iguales entramos en el if y sumamos puntos.
            */
            if (comprobanteFila(filaCarta1) == false && comprobanteFila(filaCarta2) == false && filaCarta1 != filaCarta2 && dibujoCarta1 == dibujoCarta2) {
                //sumamos un punto.
                puntuacion++;
                //guardamos en el array las filas con las cartas levantadas
                filasCartas.push(filaCarta1);
                filasCartas.push(filaCarta2);
                /*
                comprobamos si la 1º carta clicada no se encuentra volteada y si la segunda si
                en este caso el usuario a realizado un 2º click sobre una carta ya volteada y ocultamos la 1º carta
                 */
            } else if (comprobanteFila(filaCarta1) == false && comprobanteFila(filaCarta2) == true) {
                //llamamos a la funcion setTimeout para ocultar la carta con delay, esto hace que nuestro javascript asincrono actue de forma sincrona
                setTimeout(ocultarCarta, 300, filaCarta1);
                /*
                comprobamos si la primera carta clicada se encuentra volteada y si la segunda carta clicada no se encuentra volteada
                en este caso giramos la carta del 2 click.
                */
            } else if (comprobanteFila(filaCarta1) == true && comprobanteFila(filaCarta2) == false) {
                setTimeout(ocultarCarta, 300, filaCarta2);
                /*
                comprobamos que las dos cartas ya han sido volteadas
                 */
            } else if (comprobanteFila(filaCarta1) == true && comprobanteFila(filaCarta2) == true) {
                alert("Las cartas pulsadas ya se encuentran volteadas");
                //en caso que no se cumpla ninguna de las anteriores ocultamos las dos cartas
            } else {
                setTimeout(ocultarCarta, 300, filaCarta1);
                setTimeout(ocultarCarta, 300, filaCarta2);
            } //cierre if  comprobaciones
            //comprobamos que el juego se ha finalizado justo al terminar la funcion de comparar cartas.
            setTimeout(comprobarFinalJuego, 500);
            //reseteamos la variables globales a undefined para que se vuelvan a sobrescribir.
            filaCarta1:Number;
            filaCarta2:Number;
            dibujoCarta1:String;
            dibujoCarta2:String;
            //reseteamos el contador de click a 0
            contador = 0;
        } //cierre if contador == 2
    } //cierre if comprobar final del juego
} // cierre final funcion

/*creamos la funcion cronometro*/ 
var cronometro = function (){
            
    /*variables de tiempo*/
    var min:number = 0;
    var seg:number = 0;
    
    /*ingresamos los valores en el html*/
    var s:any = document.getElementById("segundos");
    var m:any = document.getElementById("minutos");


    /*creamos una funcion para que corra el tiempo*/
        const tiempoGame = setInterval(function() {
            seg++;
            
            /*conversor de segundos a minutos*/
         if(seg==60) {
            seg=0;
             min++;
          
        }
       /*convertimos los segundos en 2 digitos*/
       /*esto hace que hasta que no sea 9 haya un 0 a la izquierda*/
        var segundos = seg<=9?'0'+seg:seg;
        var minuntos = min<=9?'0'+min:min;
         /*le decimos al html que coga el tiempo*/
        s.innerHTML = segundos;
        m.innerHTML = minuntos;

    }
        /*1000 milisegundos son 1 segundo*/
    ,1000);
}


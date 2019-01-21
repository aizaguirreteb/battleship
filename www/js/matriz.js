/**
 * Estructura de datos para almacenar tableros de partidas
 * CODIFICACIÓN: 
 * ANTES DE DISPARAR ENCIMA:
 * a = agua
 * s = submarino (3)
 * p = portaviones (5)
 * f = fragata (2)
 * d = destructor (4)
 * CUANDO HEMOS DISPARADO ENCIMA:
 * A = agua
 * S = submarino (3)
 * P = portaviones (5)
 * F = fragata (2)
 * D = destructor (4)
 */

$.matriz = {};

//en principio es de 5x5
$.matriz.filas = 5;
$.matriz.columnas = 5;
$.matriz.data = [];


$.matriz.init = function (fil, col) {
    if (fil === undefined || col === undefined) {
        //tamaño por defecto

    } else {
        $.matriz.columnas = col;
        $.matriz.filas = fil;
    }
    $.matriz.data = new Array($.matriz.filas);
    for (let i = 0; i < $.matriz.columnas; i++) {
        $.matriz.data[i] = new Array($.matriz.columnas);
    }
}

/**
 * Método para rellenar una matriz con un valor(primero nuestro tablero está lleno de agua)
 */
$.matriz.fill = function (dato) {
    /*
   for(let i=0; i<$.matriz.filas; i++){
       for(let j=0; j<$.matriz.columnas; j++){
           $.matriz.data[i][j] = dato;
       }
   }
   */

    for (let i = 0; i < $.matriz.filas; i++) {
        $.matriz.data[i].fill(dato);
    }

}

/**
 * Este método almacena el dato en la posición [fil, col] de la matriz.
 */
$.matriz.set = function(fil, col, dato) {
    $.matriz.data[fil][col] = dato;
}

/**
 * Este método devuelve el valor almacenado en la posición [fil, col].
 */
$.matriz.get = function (fil, col) {
    return $.matriz.data[fil][col];    
}

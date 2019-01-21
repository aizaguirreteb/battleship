/**
 * Este objeto genera aleatorios entre un mínimio
 * y un máximo.
 */

/**
 * Devuelve un número entero entre un máximo y un mínimo
 */
$.dado.azar = function (min, max) {
    return Math.floor(Math.random() * Math.floor(max) + min);    
}
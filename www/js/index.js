/**
 * La función ejecuta el código cuando se carga la página
 */

$(document).ready(function() {
    let tablero_jugador = new Matriz(8,8);
    let tablero_maquina = new Matriz(8,8);
    tablero_jugador.fill('J');
    tablero_maquina.fill('M');

    console.log("Humano: \n" +  tablero_jugador.toString());
    console.log("Máquina: \n" + tablero_maquina.toString());

    $.controlador.init('#panel_inicio');
});
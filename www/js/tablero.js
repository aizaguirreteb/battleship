import 'matriz.js'
import 'barcos.js';
class tablero{

    constructor(filas,columnas,barcos){

        this.matriz = new Matriz(filas,columnas);
        this.matriz.fill('a');
        for(let i = 0; i < barcos; i++){
            colocaBarco($.barcos[i%5]);
        }
        
    }

    colocaBarco(barco){
        
    }
}
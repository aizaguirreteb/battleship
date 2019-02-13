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

class Matriz{    
    constructor(fil, col){
        this.columnas=col;
        this.filas=fil;
        this.data=new Array(this.filas);

        for (var i=0; i<fil; i++) {
            this.data[i] = new Array(this.columnas);    
            this.data[i].fill('a');  
        }
    }

    /**
     * Devuelve el número de filas de la matriz
     * @returns el número de columnas
     */
    getFilas(){
        return this.filas;
    }

    /**
     * Nos da el número de columnas de la matriz
     * @returns el número de columnas
     */
    getColumnas(){
        return this.columnas;
    }

    /**
     * Devuelve el contenido de la posición indicada en la matriz.
     * Si nos salimos de la matriz, devuelve NULL.
     * @param {number} i fila
     * @param {number} j columna
     */
    get(i,j) {
        if (i>=0 && i<this.filas && j>=0 && j<this.columnas )
            return this.data[i][j];
        else 
            return null;
    }

    /**
     * Guarda un dato en una posición dada de la matriz.
     * @param {number} i fila en la matriz
     * @param {number} j columna en la matriz
     * @param {number} dato dato (objeto, letra, cadena...) a almacenar
     */
    set(i,j,dato){
        if (i>=0 && i<this.filas && j>=0 && j<this.columnas ) {
            this.data[i][j]=dato;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Rellena con "dato" la matriz
     * @param {*} dato 
     */
    fill(dato){
        for(let i=0;i<this.filas;i++){
            this.data[i].fill(dato);                
        }
    }

    /**
     * Nos convierte a cadena los datos almacenados
     */
    toString(){
        var salida ="";
        for(let i=0; i<this.filas; i++){                
            for(let j=0;j<this.columnas;j++){
                salida+=this.data[i][j]+" ";
            }
            salida+="\n";
        }
        return salida;
    }
}
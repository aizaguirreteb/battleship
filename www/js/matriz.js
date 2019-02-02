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

function Matriz(fil, col){
    this.columnas=col;
    this.filas=fil;
    this.data=new Array(this.filas);

    for (var i=0; i<fil; i++) {
        this.data[i] = new Array(this.columnas);    
        this.data[i].fill('0');            
    }

    this.get = (i,j) => {
        if (i>=0 && i<this.filas && j>=0 && j<this.columnas )
            return this.data[i][j];
        else 
            return null;
    }

    this.set = (i,j,dato) => {
        if (i>=0 && i<this.filas && j>=0 && j<this.columnas ) {
            this.data[i][j]=dato;
            return true;
        } else {
            return false;
        }
    }
    this.fill = (dato) => {
        for(let i=0;i<this.filas;i++){
            this.data[i].fill(dato);                
        }
    }
    this.toString = () => {
        var salida ="";
        for(let i=0; i<this.filas; i++){                
            for(let j=0;j<this.columnas;j++){
                salida+=this.data[i][j]+"\t";
            }
            salida+="\n";
        }
        return salida;
    }
}
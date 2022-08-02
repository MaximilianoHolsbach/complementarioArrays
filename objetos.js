// BLOQUE DE OBJETOS//

class Trabajador{
    constructor(id,nombre,apellido,categoria,sueldo=0){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.categoria = categoria
        this.sueldo = sueldo
    }
    pago(basico){
        if(this.categoria=='a'){
            this.sueldo = basico * 3
        }else if(this.categoria=='b'){
            this.sueldo = basico * 2
        }else{
            this.sueldo = basico
        }
    }
}

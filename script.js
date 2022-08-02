//BLOQUE DE VARIABLES//

let crear = true
const empleados = []
let basico = 1000
//DATOS DEL EMPLEADO//

while(crear = true){
    do{
        id = parseInt(prompt("Ingrese el id: "))
        if (isNaN(id)){
            alert("Ingrese un número")
            continue
        }
        nombre = prompt("Ingrese el nombre: ").toLocaleLowerCase()
        if(!isNaN(nombre)){
            alert("Ingrese datos validos")
            continue
        }
        apellido = prompt("Ingrese el apellido: ").toLocaleLowerCase()
        if(!isNaN(apellido)){
            alert("Ingrese datos validos")
            continue
        }
        categoria = prompt("Ingrese la categoria según corresponda 'A','B','C': ").toLocaleLowerCase()
        if((categoria != 'a')&&(categoria != 'b')&&(categoria != 'c')){
            alert("Ingrese datos validos")
            continue
        }
    }while(!isNaN(nombre) || !isNaN(apellido) || ((categoria != 'a')&&(categoria != 'b')&&(categoria != 'c')) || isNaN(id))

    //CREAMOS ARRAYS DE EMPLEADOS//

    empleados.push(new Trabajador(id,nombre,apellido,categoria))

    consulta = prompt("Seguir cargando empleados, si o no: ").toLocaleLowerCase()
    if (consulta == "si"){
        crear = true
    }else{
        crear = false
        break
    }
}

//PAGAMOS SUELDOS SEGUN CATEGORIA//

for(const empleado of empleados){
    empleado.pago(basico)
}

console.table(empleados)


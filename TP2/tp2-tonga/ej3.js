import { agregarContactos, eliminarContacto, mostrarContactos } from './funciones.js'

//me aburri de comentar, srry, creo que se entiende el funcionamiento que hay en "funciones"
const ej3 = () => {

    mostrarContactos()
    agregarContactos('NoSeQuePoner', '13579', 'locura@total.com')
    mostrarContactos()
    eliminarContacto('NoSeQuePoner')

}

ej3()

/*
require ('dotenv').config()

// ej 1
const {DB_HOST, DB_USER, DB_PASS} = process.env
console.log(`
Host: ${DB_HOST}
Admin: ${DB_USER}
Password: ${DB_PASS}
    `)

    */

// ej 2
// const math = require('./math.js')
import { sumar } from './math.js'

// console.log(math.sumar1(12, 4))

console.log(sumar(6, 9))

// ej 3
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ej3_1 = async() => {
    return new Promise((resolve, reject) => {
        rl.question('Como te llamas?\n', (nombre) => {
            console.log(`Hola ${nombre}!`)
            resolve()
        })
    })
}

const ej3_2 = async() => {
    return new Promise((resolve, reject) => {
        rl.question('Que edad tenes?\n',(edad)=>{
                const aNac = new Date().getFullYear() - parseInt(edad);
                console.log(aNac)
                resolve()
         
        })
    })

}
// ej 4

const ej4_1 = async() => {
    return new Promise((resolve) => {
        rl.question('Dame tu nombre:\n', (nombre) => {
            resolve(nombre)
        })
    })
}
const ej4_2 = async() => {
    return new Promise((resolve) => {
        rl.question('Dame tu edad:\n', (edad) => {
            resolve(edad)
            
        })
    })
}
const ej4_3 = async() => {
    return new Promise((resolve) => {
        rl.question('Dame tu correo electronico:\n', (email) => {
            resolve(email)
            
        })
    })
}

import fs from 'fs'

const main = async () => {
    await ej3_1()
    await ej3_2()

    const nombre = await ej4_1()
    const edad = await ej4_2()
    const email = await ej4_3()

    fs.writeFileSync('datos_usuario.txt', `Nombre: ${nombre}.
Edad: ${edad}.
Correo electronico: ${email}.`)

    const response = fs.readFileSync('datos_usuario.txt', 'utf-8')
    console.log(response)

    rl.close()
}

main()

/*
*-PREGUNTAS-*

¿Qué ventajas tiene usar dotenv para manejar configuraciones sensibles en vez de tenerlas directamente en el código?
-- porque el .env no se guarda en los repos, entonces la información sensible (como contraseñas, claves de api, etc)
-- queda separada y con el dotenv se puede acceder a ellas de forma segura

¿Por qué es importante utilizar Nodemon durante el desarrollo en proyectos de Node.js?
-- porque evita que tengamos que re-correr el codigo muchas veces, ya que se actualiza de forma dinamica (aunque a
-- veces se buguee)

¿Qué diferencias encuentras entre el uso de require y import/export? ¿Por qué es preferible utilizar la sintaxis ES6
en proyectos modernos?
-- permite un manejo mas sencillo de las importaciones y exportaciones cuando usamos el import/export. A su vez,
-- la sintaxis del ES6 es mas moderna, estilizada y facil de leer, ademas de añadir cosas importantisimas como
-- las constantes, las variables o las arrow functions
*/
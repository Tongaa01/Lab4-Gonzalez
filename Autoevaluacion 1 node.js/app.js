import readline from 'readline'
import yargs from 'yargs'
import fs from 'fs'

const argv = yargs(process.argv.slice(2))
    .command('file', 'Guarda informacion en un JSON', {
        nombreArchivo: {
            describe: 'Nombre del archivo JSON a guardar',
            type: 'string',
            default: 'productos.json'
        }
    })
    .help().argv

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const q1 = async () => {
    return new Promise((resolve) => {
        rl.question('Nombre del producto: ', (nombre) => {
            resolve(nombre)
        })
    })
}

const q2 = async () => {
    return new Promise((resolve) => {
        rl.question('Precio del producto: ', (precio) => {
            resolve(precio)
        })
    })
}

const q3 = async () => {
    return new Promise((resolve) => {
        rl.question('Cantidad de unidades del producto: ', (cantidad) => {
            resolve(cantidad)
        })
    })
}

const main = async()=>{
    if (argv._.includes('file')) {

        // almacena los 3 valores necesarios
        const nombre = await q1()
        const precio = await q2()
        const cantidad = await q3()
    
        rl.close()
    
        // primer condicion: si no existe el archivo, crearlo
        if (!fs.existsSync(argv.nombreArchivo)) {
            fs.writeFileSync(argv.nombreArchivo,
                `[
        {
            "nombre": ${nombre},
            "precio": ${precio},
            "cantidad": ${cantidad}
        }
    ]`)
            process.exit(0)
        }
    
        // segunda condicion: si existe, solo appendearlo
        let oldJson = fs.readFileSync(argv.nombreArchivo, 'utf-8')
        newData = newData.replace(']', ',')
    
        fs.writeFileSync(argv.nombreArchivo, oldJson)
    
        fs.appendFileSync(argv.nombreArchivo,
    `, {
            "nombre":${nombre},
            "precio":${precio},
            "cantidad":${cantidad}
        }
    ]`
        )

        // mostrar los datos por consola
        const data = JSON.parse(fs.readFileSync(argv.nombreArchivo, 'utf-8'))
        console.log(data)
    }
}

main()
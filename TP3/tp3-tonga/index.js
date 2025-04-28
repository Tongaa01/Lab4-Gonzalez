const yargs = require('yargs');
const fs = require('fs')

const argv = yargs
    .command('saludar', 'Muestra un saludo', {
        nombre: {
            describe: 'Nombre de la persona a saludar',
            demandOption: true,
            type: 'string',
            default: "null"
        }
    })
    .command('despedir', 'Muestra una despedida', {
        nombre: {
            describe: 'Nombre de la persona a despedir',
            demandOption: true,
            type: 'string',
            default: "null"
        }
    })
    .command('sumar', 'Suma n1 y n2', {
        n1: {
            describe: '1er numero a sumar',
            demandOption: true,
            type: 'number'
        },
        n2: {
            describe: '2do numero a sumar',
            demandOption: true,
            type: 'number'
        }
    })
    .command('parsear', 'Parsea un JSON y lo muestra en consola', {
        builder: {
            ruta: {
            describe: 'Ruta del archivo JSON',
            demandOption: true,
            type: 'string'
        }},
        handler: (argv) => {
            fs.readFile(argv.ruta, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err);
                    return;
                }
                console.log(JSON.parse(data));
            });
        }
    })
    .help()
    .argv;

if (argv._.includes('saludar')) {
    if (argv.nombre=="null") {
        console.error('Error: No proporcionaste un nombre para saludar');
        process.exit(1);
    }
    console.log(`Hola, ${argv.nombre}!`);
}

if (argv._.includes('despedir')) {
    if (argv.nombre=="null") {
        console.error('Error: No proporcionaste un nombre para saludar');
        process.exit(1);
    }
    console.log(`Adios, ${argv.nombre}!`);
}

if (argv._.includes('sumar')) {
    console.log(`La suma da ${argv.n1 + argv.n2}`)
}
const fs = require('fs');

// funcion para escribir la primera parte del archivo
let writeFirstPart = () => {
    let actualDate = new Date().toISOString().replace('T', ' ').slice(0,-5)
    fs.writeFile('log.txt',
        `    [${actualDate}] - Inicio del programa \n
    [${actualDate}] - Ejecutando tarea... \n
    `,
        (err) => {
            if (err) {
                console.log(err)
            }
        }
    )
};

// funcion para escribir la segunda parte del archivo
const writeSecondPart = () => {
    let actualDate = new Date().toISOString().replace('T', ' ').slice(0,-5)
    fs.appendFile('log.txt',
        `[${actualDate}] - Fin del programa \n`,
        (err) => {
            if (err) {
                console.log(err)
            }
        }
    )
    return ("")
};

// funcion para manejar la espera entre la escritura de la primera y segunda parte
let sleep = () => {setTimeout(writeSecondPart, 5000)}

// funcion que llama a la escritura completa y ordenada
const writeWholeDocument = async () => {
    writeFirstPart()
    sleep()
}

// run
writeWholeDocument();
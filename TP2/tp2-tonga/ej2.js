const fs = require('fs');

// ahora voy a intentar hacerlo todo dentro de una misma funcion a ver si sale
// UPDATE: funcionó lpm soy un capo (ponele)
const ej2 = () => {

    // primero voy a escribir en el archivo
    fs.writeFileSync('datos.txt', `Nombre: Gaston Astudillo
Edad: 23 (almost 24 tho)
Carrera: Programación
        `)

    // ahora voy a leer el archivo
    try {
        const texto = fs.readFileSync("datos.txt", "utf-8");
        console.log(texto);
    } catch (error) {
        throw error;
    }

    // agrego la timestamp de modificacion
    fs.appendFileSync('datos.txt', `
Fecha de modificacion: [${new Date().toISOString().replace('T', ' ').slice(0, -5)}]`)

    // hago el rename del archivo
    setTimeout(() => {
        fs.renameSync('datos.txt', 'informacion.txt');
    }, 3000);

    // termino con el unlink luego del timeout de 10s despues del rename
    setTimeout(() => {
        fs.unlinkSync('informacion.txt');
    }, 13000);
}

ej2();
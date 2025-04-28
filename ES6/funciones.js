import fs from 'fs';

export const createFile = (selectedBase, data) => {
    fs.writeFileSync(`data/tabla-${selectedBase}.txt`, data)
}

export const createDir = () => {
    if (!fs.existsSync("data")) {
        fs.mkdirSync("data")
        console.log("La carpeta se creó exitosamente")
    } else {
        console.log("La carpeta ya existe")
    }
}

export const createTable = (selectedBase) => {
    for (let i = 1; i <= 10; i++) {
        fs.appendFileSync('data/tabla-' + selectedBase + '.txt', `\n${selectedBase} x ${i} = ${selectedBase * i}`)
    }
}

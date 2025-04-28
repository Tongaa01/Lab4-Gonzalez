import fs from 'fs';
import { createDir, createFile, createTable } from './funciones.js';

const args = process.argv;
const [, , base = 5] = args;

try {

    let selectedBase = 5

    if (base != 5) {
        selectedBase = Number(base.split("=")[1])
    } else {
        selectedBase = Number(base)
    }

    let data = `Tabla del ${selectedBase}:`

    createDir();

    createFile(selectedBase, data);

    createTable(selectedBase);

} catch (error) {
    console.log(error)
}
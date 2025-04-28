import { contadorDePalabras } from "./funciones.js";

const archivo = process.argv[2]
const palabra = process.argv[3]

contadorDePalabras(archivo, palabra)
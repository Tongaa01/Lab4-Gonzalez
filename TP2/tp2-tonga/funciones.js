import fs from 'fs'

export const mostrarContactos = () => {

    const data = fs.readFileSync('contactos.json', 'utf-8')
    const contenido = JSON.parse(data)
    console.log(contenido)
}

export const agregarContactos = (nombre, telefono, email) => {

    /*
        little disclaimer: seguramente hay formas mas eficientes de hacer este ejercicio,
        pero estaba probando el agregar un contacto desde un json, hice todas las pruebas
        ahí y luego de lograr que funcionara (mucho dolor) vi que en realidad debia pasarle
        como dato a la funcion, asi que adapté lo que ya tenia a lo que me pide.
    */

    fs.writeFileSync('nuevoContacto.txt', `,
    {
        "nombre": "${nombre}",
        "telefono": "${telefono}",
        "email": "${email}"
    }
]`)

    let newData = fs.readFileSync('nuevoContacto.txt', 'utf-8')
    newData = newData.replace('[', ',')

    setTimeout(() => fs.unlinkSync('nuevoContacto.txt'), 100)

    let original = fs.readFileSync('contactos.json', 'utf-8')
    original = original.replace(']', '')

    fs.writeFileSync('contactos.json', original + newData)

}

export const eliminarContacto = (nombreEsperado)=>{

    let users = JSON.parse(fs.readFileSync('contactos.json', 'utf-8'))

    let id = -1

    for (let i=0; i<users.length; i++){
        if (users[i].nombre == nombreEsperado){
            id = i
            break
        }

    }
    console.log(id)
    const selectedUser = users[id]
    console.log(selectedUser)

    users.splice(id, 1)
    console.log(users)

    fs.writeFileSync('contactos.json', JSON.stringify(users))
}

const myReplaceFunction = (text)=>{
    return text.replace('.','').replace(',','').replace('!','').replace('¡','').replace('?','').replace('¿','').replace('-','').replace('_','').replace('$','').replace('{','').replace('}','').replace('[','').replace(']','').replace('+','').replace('*','').replace('/','')
}

export const contadorDePalabras = (archivo, palabra)=>{

    const readValues = fs.readFileSync(archivo, 'utf-8')
    const storedValues = myReplaceFunction(readValues).toLowerCase().split(' ')
    
    let wordCounter = 0

    for (let i=0; i<=storedValues.length; i++){
        if (storedValues[i]==palabra) wordCounter++
    }

    wordCounter==0 
    ? console.log(`La palabra "${palabra}" no aparece en el archivo "${archivo}"`)
    : console.log(`La palabra "${palabra}" aparece ${wordCounter} veces en el archivo "${archivo}"`)
}


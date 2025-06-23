// CREANDO UNA ARRAY CON TRES FRUTAS
let frutas = ["manzana", "platano", "cereza"]
console.log(frutas)

// AGREGANDO UNA FRUTA AL FINAL
frutas.push("kiwi")
console.log(frutas)

// BORAMOS PRIMERA POSICION DE LA ARRAY
frutas.shift()
console.log(frutas)

// BUSCAMOS EL INDICE DE LA FRUTA
let indice = frutas.indexOf("cereza")
if (indice !== -1) {
    console.log(`El Indice de cereza es: ${indice}`)
} else {
    console.log("La cereza no se encontrO.")
}

// IMPRIMIENTO CON UN FOR EACH
console.log("--- Frutas ---")
for (const fruta of frutas) {
    console.log(fruta)
}

// DECLARAMOS LETRA QUE EMPIEZA
// EL FILTER() EMPIEZA RECORRER EL ARRAY
// CREAMOS UNA FUNCCION ANONIMA ( CALLBACK )
// LUEGO  LA VUELVE DE ELTRA CHICA Y SI EMPIEZA CON LETRA DEL FILTRO LA AÑADE A LA VARIABLE FRUTASCON
let filtro = 'p'
let frutasCon = frutas.filter(function (fruta) {
    return fruta.toLowerCase().startsWith(filtro)
})

// IMPRIMIENDO
console.log(`--- Frutas que empiezan con '${filtro}' ---`)
console.log(frutasCon)
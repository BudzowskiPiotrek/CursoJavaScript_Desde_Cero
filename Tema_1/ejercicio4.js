// BUCLE FOR QUE IMPRIME DE 1 AL 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i % 2 === 0) {
        console.log(i + " es par")
    }
}

// PARA QUE IMRIMA EN MISMA LINEA
for (let i = 1; i <= 10; i++) {
    let mensaje = i
    if (i % 2 === 0) {
        mensaje += " es par "
    }
    console.log(mensaje) 
}

// AGRUPANDO MENSAJES
for (let i = 1; i <= 10; i++) {
    console.group()
    console.log(i)
    if (i % 2 === 0) {
        console.log(i + " es par")
    }
    console.groupEnd()
}
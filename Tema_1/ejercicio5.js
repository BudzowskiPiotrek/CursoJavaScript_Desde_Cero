// CREANDO LA FUNCION QUE IMPRIME AUTOMATICAMENTE
function saludar(nombre) {
    console.log("Hola, " + nombre + "! Bienvenido a JavaScript.")
}

// IMPRIMIENDO FUNCION
console.log("--- Parte 1 ---");
saludar("Cristobal")

// CREANDO LA FUNCION CON RETORNO
function saludarConRetorno(nombre) {
    return "Hola, " + nombre + "! Bienvenido a JavaScript."
}

// IMPRIMIENDO FUNCION CON RETORNO
console.log("\n--- Parte 2 ---")
console.log(saludarConRetorno("Cristobal"))
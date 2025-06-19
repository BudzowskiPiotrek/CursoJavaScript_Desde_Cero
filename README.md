# 🚀 Curso de JavaScript: Desde Cero

¡Hola y bienvenido a tu viaje por el fascinante mundo de JavaScript! 👋 Soy tu profesor personal en esta aventura de aprendizaje. He preparado un plan de estudios paso a paso, diseñado para que, con tu base en Java, domines JavaScript de forma efectiva y divertida. ¡Prepárate para codificar! 💡

---

## ✨ Tema 1: Fundamentos de JavaScript ✨

En este primer pilar de nuestro curso, vamos a sentar las bases de JavaScript. Aunque ya eres un crack en Java, es crucial entender las particularidades de este lenguaje para construir código robusto y eficiente. ¡Aquí despegamos! 🚀

### 📚 Contenido del Temario:

* **¿Qué es JavaScript y para qué se usa?**
    * Breve historia y su evolución constante. 🕰️
    * **JavaScript en el navegador (front-end)**: La magia visual que ves en la web.
    * **JavaScript en el servidor (Node.js)**: Lleva tu código al backend.
    * **Diferencias clave con Java**: Interpretado vs. compilado, tipado dinámico vs. estático. ¡Conceptos que te abrirán la mente! 🤔
* **Configuración del entorno:**
    * Dónde y cómo escribir tu primer código JavaScript (directamente en HTML o en archivos `.js` externos). 📄
    * La **consola del navegador**: Tu mejor amiga para depurar y probar. ¡Aprende a usarla a fondo! 👩‍💻
* **Variables y Tipos de Datos:**
    * Declaración de variables con `var`, `let` y `const`. ¡Entender sus diferencias es vital! 🎯
    * **Tipos de datos primitivos**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
    * El poderoso tipo de dato `object`.
    * **Tipado dinámico en JavaScript**: La flexibilidad que a veces sorprende. 😉
* **Operadores:**
    * **Aritméticos**: `+`, `-`, `*`, `/`, `%`, `**`. ¡Matemáticas puras! ➕
    * **Asignación**: `=`, `+=`, `-=`, etc.
    * **Comparación**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`. ¡Ojo con `==` vs `===`! Es una trampa común. 🕵️‍♂️
    * **Lógicos**: `&&` (AND), `||` (OR), `!` (NOT).
* **Estructuras de Control de Flujo:**
    * **Condicionales**: `if`, `else if`, `else`, `switch`. ¡Toma decisiones en tu código! ✅
    * **Bucles**: `for`, `while`, `do...while`. Repetición sin aburrirse. 🔁
    * **Iteración sobre colecciones**: Introducción a `for...of` y `for...in`.
* **Funciones:**
    * Declaración de funciones (clásica, de expresión, y las modernas **funciones flecha - `arrow functions`** 🏹).
    * Parámetros y argumentos.
    * Retorno de valores. 🔄
    * **Ámbito de las variables (scope)**: Dónde viven tus variables.

---

## 🚀 Ejercicios del Tema 1: ¡Manos a la Obra! 🚀

Es hora de poner en práctica lo aprendido. Recuerda que la **consola de tu navegador** será tu mejor aliada para ver los resultados. ¡No tengas miedo de experimentar! 🎉

### ✍️ Ejercicio 1: Variables y Tipos de Datos

* Declara una variable `nombre` con tu nombre usando `const`.
* Declara una variable `edad` con tu edad usando `let`.
* Declara una variable `esEstudiante` con un valor booleano (`true`/`false`) usando `var`.
* Imprime el **valor y el tipo** de cada una de estas variables en la consola. (Pista: usa el operador `typeof`).

###  ➕ Ejercicio 2: Operaciones Aritméticas y Comparación

* Define dos variables `num1` y `num2` con valores numéricos a tu elección.
* Realiza las siguientes operaciones e imprime el resultado en la consola:
* Suma de `num1` y `num2`.
* Multiplicación de `num1` por `num2`.
* El resto (módulo) de la división de `num1` entre `num2`.
* Comprueba si `num1` es estrictamente igual a num2 (usando ===). Imprime el resultado booleano.
* Comprueba si `num1` es diferente de `num2` (usando !=). Imprime el resultado.

###  🚦  Ejercicio 3: Condicional if/else

* Crea una variable `temperatura` y asígnale un valor numérico (ej: 20).
* Escribe un bloque `if`/`else` `if`/`else` que imprima en la consola:
* "Hace calor" si la `temperatura` es mayor a 25. ☀️
* "Temperatura agradable" si la `temperatura` está entre 15 y 25 (ambos inclusive). 🌳
* "Hace frío" si la `temperatura` es menor a 15. 🥶

###  🔄 Ejercicio 4: Bucle for

* Utiliza un bucle `for` para imprimir en la consola los números del 1 al 10.
* Dentro del mismo bucle, si el número es par, imprime también "El número X es par". (Pista: usa el operador módulo % para saber si es par).

### ⚙️ Ejercicio 5: Función Simple

* Crea una función llamada `saludar` que reciba un parámetro `nombre`.
* La función debe imprimir en la consola un mensaje como: "Hola, [nombre]! Bienvenido a JavaScript.".
* Llama a la función `saludar` con tu `nombre` como argumento.
* Modifica la función: En lugar de imprimir directamente, haz que la función retorne el mensaje, y luego imprime el valor retornado por la función en la consola. ¡Practica el `return`!

---

---

## ✨ Tema 2: Estructuras de Datos y Conceptos Avanzados ✨

¡Excelente trabajo con los fundamentos! 💪 Ahora que manejas lo básico, nos adentraremos en cómo JavaScript organiza la información y algunas de sus particularidades en el manejo de datos. Comprender estos conceptos es crucial para escribir código más eficiente y robusto. ¡Vamos a darle! 🚀

### 📚 Contenido del Temario:

* **Arrays (Arreglos/Listas):**
    * Declaración y acceso a elementos (¡como en Java, pero con sabor JavaScript!).
    * **Métodos comunes de Arrays**: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `indexOf()`, `includes()`. ¡Tu arsenal para manipular listas! 🛠️
    * **Iteración de Arrays**: `forEach()`, `map()`, `filter()`, `reduce()`. Estos son **SUPER IMPORTANTES** para la programación moderna en JavaScript. ¡Prepárate para usarlos mucho! 🤩
* **Objects (Objetos):**
    * Declaración de objetos literales. ¡Muy distintos a las clases de Java, mucho más flexibles! 🧩
    * Acceso a propiedades (notación de punto y corchetes).
    * Adición, modificación y eliminación de propiedades.
    * Iteración de propiedades de objetos.
* **Manejo de Errores: `try...catch`:**
    * Cómo JavaScript maneja los errores en tiempo de ejecución. 🐛
    * La sentencia `try...catch` para capturar y gestionar errores de forma elegante y evitar que tu programa se rompa. ✅
* **Programación Asíncrona (Introducción):**
    * ¿Qué es la asincronía y por qué es tan vital en JavaScript (especialmente en desarrollo web)? ⚡
    * Callbacks (introducción al concepto).
    * **Promesas**: La base moderna de la asincronía (`.then()`, `.catch()`, `.finally()`). ¡Comprender esto te abrirá muchas puertas! 🔑

---

## 🚀 Ejercicios del Tema 2: ¡Manos a la Obra! 🚀

Es hora de poner en práctica lo aprendido. Recuerda que la **consola de tu navegador** será tu mejor aliada para ver los resultados. ¡No tengas miedo de experimentar! 🎉

### 🍎 Ejercicio 1: Manipulación de Arrays

* Crea un array llamado `frutas` con al menos 5 nombres de frutas (ej: `["manzana", "plátano", "cereza", ...]`).
* Agrega una nueva fruta al final del array.
* Elimina la primera fruta del array.
* Encuentra el índice de una fruta específica (que exista en tu array, ej: "cereza") y luego imprímelo.
* Usa el método `forEach` para imprimir cada fruta en la consola.
* Crea un nuevo array llamado `frutasConA` que contenga solo las frutas de tu array original que empiecen con la letra 'A' (o cualquier otra letra que elijas). Usa el método `filter()`.

### 📚 Ejercicio 2: Creación y Manipulación de Objetos

* Crea un objeto llamado `libro` con las siguientes propiedades: `titulo`, `autor`, `anioPublicacion` y `genero`. Asigna valores a cada una.
* Imprime el `titulo` y el `autor` del libro en la consola.
* Agrega una nueva propiedad al objeto `libro` llamada `editorial` y asígnale un valor.
* Modifica el `anioPublicacion` del libro a un nuevo año.
* Imprime el objeto `libro` completo en la consola después de todas las modificaciones.

### 📈 Ejercicio 3: Uso de `map()` y `reduce()`

* Dado un array de números: `const numeros = [10, 20, 30, 40, 50];`
* Usa el método `map()` para crear un nuevo array donde cada número sea el doble del original. Imprime el nuevo array.
* Usa el método `reduce()` para calcular la suma total de todos los números en el array original. Imprime la suma.

### 🚨 Ejercicio 4: Manejo de Errores con `try...catch`

* Crea una función llamada `dividir` que reciba dos parámetros `a` y `b`.
* Dentro de la función, usa un bloque `try...catch`.
* En el bloque `try`, si `b` es `0`, lanza un nuevo error con el mensaje `"No se puede dividir por cero."`.
* Si `b` no es `0`, retorna el resultado de `a / b`.
* En el bloque `catch`, imprime el mensaje de error capturado.
* Llama a la función `dividir` varias veces para probar ambos casos:
   * Una vez con valores válidos (ej: `dividir(10, 2)`).
   * Otra vez intentando dividir por cero (ej: `dividir(5, 0)`).

### ⏳ Ejercicio 5: Introducción a Promesas
* Crea una función llamada `simularCargaDatos` que retorne una `Promise`.
* Dentro de la promesa, usa `setTimeout` para simular una operación asíncrona que tarda 2 segundos.
* Después de 2 segundos, la promesa debe `resolve` (resolver) con un mensaje como `"Datos cargados correctamente"`.
* Añade un caso de error: Si el número aleatorio es menor a 0.5 (puedes usar Math.random()), la promesa debe reject (rechazar) con el mensaje "Error al cargar los datos".
* Llama a `simularCargaDatos()` y encadena un `.then()` para manejar el éxito y un `.catch()` para manejar el error.
* También añade un `.finally()` para imprimir `"Operación finalizada"` siempre, sin importar si hubo éxito o error. ¡Esto es genial para limpieza! 🧹

## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Anderson';
let apellido = 'Cordero';
let username = 'andercor';
let edad = 19;
let mail = 'example@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 200;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

Las funciones nos permiten reutiliar bloques de codigo para reutilizarlos en un futuro.

- ¿Cuándo me sirve usar una función en mi código?

Nos sirve crear una funcion cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser marametros y argumentos) que podemos encapsular  para reutilizar mas de una vez en el futuro.

Tambien nos sirve para ordenar y mejorar legibilidad de nuestr codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function nombreCompleto(name, lastName, username) {
    return name + ' ' + lastName;
}

function saludo(name, lastname){
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", preso prefiero que me digas " + username + ".");
}

saludo('Anderson', 'Cordero', 'Ander');
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch
El condicional if (con else y else if) nos permite hacer validacion completamente distintas (si asi queremos) en cada validacion o condicional. En cambio, en el switch todo los cases se comparan con la misma variable o condicion que definimos en el Switch.

- ¿Puedo combinar funciones y condicionales?

Si. Las funciones pueen encapcular cualquier bloque de codigo incluyendo condicionales.


### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
```js
if (tipoSuscriocion == 'Free') {
    console.log('Solo puedes tomar los cursos gratis');
}else if(tipoSuscriocion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoSuscriocion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tiposuscripcion == 'ExpertDuo'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == 'Free') {
    console.log('Solo puedes tomar los cursos gratis');
        return;
    }
    
    if(suscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if(suscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if(suscripcion == 'ExpertDuo'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warn('Ese tipo de suscripcion no existe');
}
```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js
const tipoDeSuscripcion = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

function conseguirTipoSuscripcion(suscripcion){
    if (tipoDeSuscripcion[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripcion no existe');
}

```
## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

La forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while, for, foreach. 

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validacion de nuestros condicionales nucna se cumple y termina rompiendo la aplicacion.

- ¿Puedo mezclar ciclos y condicionales?

Si. los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro de un ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```js
i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta = prompt('Cuanto es 2 + 2?');

while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2 + 2?');
    respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista elementos.
```js
const array = [1, 'hola', true, false];
```

- ¿Qué es un objeto?

Es unalista de elementos PERO cada elemento tiene un nombre clave.
```js
const user = {'name': 'Anderson', 'lastname': 'Cordero','age': 19};
```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la rega se peude incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los arrays pueen guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function imprimirPrimerElementoArray(array){
    console.log(array.shift());
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElemntosArray(array){
    
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirElementoProElementoObjeto(obj){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```
# Escribir HTML desde JavaScript

- 1. innerHTML
Inserta codigo HTML en tu HTML reconociendo las etiquetas:
```js
elemento.innerHTML = 'Nuevo texto<br>';
```

- 2. innerText
Inserta Texto plano en tu HTML:
```js
elemento.innerText = 'Nuevo texto';
```

- 3. getAttribute()
Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis:
```js
elemento.getAttribute('class');
```

- 4. setAttribute()
Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis:
```js
elemento.setAttribute('class', 'nuevo-valor');
```

- 5. classList.add()
Para agregar un valor a una clase existente en un elemento:
```js
elemento.classList.add('nuevo-valor1');
```

- 6. classList.remove()
Para eliminar el valor descrito en parentesis a la clase de un elemento:
```js
elemento.classList.remove('nueva-valor1');
```

- 7. classList.toggle(‘titulo’)
Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca:

```js
elemento.classList.add('valor');
```

- 8. classList.contains(‘titulo’)
Devuelve true o false Si una propiedad tiene un valor descrito entre parentesis:

```js
elemento.classList.contains('valor');
```

# Escribir HTML desde JavaScript

### innerHTML

Inserta codigo HTML en tu HTML reconociendo las etiquetas:
```js
elemento.innerHTML = 'Nuevo texto<br>';
```

### innerText

Inserta Texto plano en tu HTML:
```js
elemento.innerText = 'Nuevo texto';
```

### getAttribute()

Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis:
```js
elemento.getAttribute('class');
```

### setAttribute()

Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis:
```js
elemento.setAttribute('class', 'nuevo-valor');
```

### classList.add()

Para agregar un valor a una clase existente en un elemento:
```js
elemento.classList.add('nuevo-valor1');
```

### classList.remove()

Para eliminar el valor descrito en parentesis a la clase de un elemento:
```js
elemento.classList.remove('nueva-valor1');
```

### classList.toggle(‘titulo’)

Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca:

```js
elemento.classList.add('valor');
```

### classList.contains(‘titulo’)

Devuelve true o false Si una propiedad tiene un valor descrito entre parentesis:

```js
elemento.classList.contains('valor');
```

### .value = ‘valor’

Colocarle un valor a un elemento, usualmente colocado en inputs:

```js
elemento.value = '12345';
```

### .createElement()

Crea un elemento HTML ( < img >, < section >, < header >, < div >, etc )

```js
document.createElement(img);
```

### .append()
Puede agregar al documento uno o varios elementos creado previamente al agregarlo entre parentesis:

```js
elemento.append(img, img2);
```

### .appendChild()
Puede agregar al documento solo un elemento creado previamente al agregarlo entre parentesis:

```js
elemento.append(img);
```
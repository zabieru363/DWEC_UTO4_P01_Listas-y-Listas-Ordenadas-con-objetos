"use strict";

/**
 * Variable JSON que hace de diccionario de colores para
 * mostrar con colores los mensajes por pantalla. 
 */
const dictionaryColors = {
    printMessage : "#00C2C8",
    functionTitle : "#00C800",
    exception : "#CD0000",
    errorName : "#0500FF",

    setColor : function(color) {
        return "color: " + dictionaryColors[color];
    }
};

// ! Función de testeo.
(function() {
    // Creando una lista:
    const list = new List();

    // * PROBANDO MÉTODOS DEL OBJETO LIST

    // ? IsEmpty:
    console.log(list.isEmpty());    // True

    // ? IsFull:
    console.log(list.isFull()); // False.
    
    // ? Size
    console.log(list.size());   // 0

    // ? Add
    // Los añade todos.
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    list.add("Felipe");
    list.add("Marta");

    console.log(list.size());
    
    // ! ERRORES DE ADD:

    // La lista está llena.
    try {
        list.add("otro");   // Este no lo añade.
    } catch(error) {
        console.error(error);   // Por lo que genera una excepción.
    }

    console.log(list.size());
    
    // ? Clear
    list.clear();   // Vacio la lista.

    console.log(list.size());
    
    // ? AddAt
    
    // Los añade todos.
    console.log(list.addAt("Javier", 0));
    console.log(list.addAt("María", 1));
    console.log(list.addAt("Fernando", 2));
    console.log(list.addAt("Felipe", 3));
    console.log(list.addAt("María", 4));

    console.log(list.size());
    
    // ! PROBANDO ERRORES DE ADDAT:
    
    // La lista está llena.
    try {
        console.log(list.addAt("otro", 2));
    } catch(error) {
        console.error(error);   // La lista está llena.
    }

    list.clear();

    // El indice está fuera de los límites de la lista.
    try {
        console.log(list.addAt("otro", 22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los límites de la lista.
    }

    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    // ? Get
    console.log(list.get(0));   // Javier
    console.log(list.get(1));   // María

    // ! PROBANDO ERRORES DE GET.

    // El indice está fuera de los limites de la lista.
    try {
        console.log(list.get(22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los limites de la lista.
    }

    // El elemento no existe en la lista.
    console.log(typeof list.get(3) === "undefined" ? "No encontrado" : ""); // No encontrado.

    // ? ToString
    console.log(list.toString());   // Javier - María - Fernando

    // ! PROBANDO ERRORES DE TOSTRING

    // La lista está vacía.
    list.clear();

    try {
        console.log(list.toString());
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    // ? IndexOf
    console.log(list.indexOf("Javier"));    // 0

    // ! PROBANDO ERRORES DE INDEXOF

    // El elemento no fue encontrado.
    console.log(list.indexOf("Marta") === -1 ? "No encontrado" : "");   // No encontrado

    // La lista está vacía.
    list.clear();

    try {
        console.log(list.indexOf("Javier"));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // ? LastIndexOf
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(list.lastIndexOf("Fernando"));  // 2

    // ! PROBANDO ERRORES DE LASTINDEXOF

    // Elemento no encontrado.
    console.log(list.lastIndexOf("Marta") === -1 ? "No encontrado" : "");   // No encontrado.

    // La lista está vacía.
    list.clear();

    try {
        console.log(list.lastIndexOf("Javier"));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // ? Capacity
    console.log(list.capacity());   // 5

    // ? FirstElement
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(list.firstElement());   // Javier

    // ! PROBANDO ERRORES DE FIRSTELEMENT

    list.clear();

     // La lista está vacía.
    try {
        console.log(list.firstElement());
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // ? LastElement
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(list.lastElement());    // Fernando

    // ! PROBANDO ERRORES DE LASTELEMENT

    list.clear();

     // La lista está vacía.
    try {
        console.log(list.lastElement());
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // ? Remove
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(...list.remove(1)); // María

    // ! PROBANDO ERRORES DE REMOVE

    try {
        console.log(list.remove(22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los limites de la lista.
    }

    list.clear();

     // La lista está vacía.
    try {
        console.log(list.remove(1));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // ? RemoveElement
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(list.removeElement("María"));
    
    // ! PROBANDO ERRORES DE REMOVEELEMENT

    list.clear();
    
     // La lista está vacía.
    try {
        console.log(list.removeElement("María"));
    } catch(error) {
        console.error(error);    // La lista está vacía.
    }

    // ? Set
    list.add("Javier");
    list.add("María");
    list.add("Fernando");

    console.log(...list.set("Zabieru", 0))

    // ! PROBANDO ERRORES DE SET

    // El indice está fuera de los limites de la lista.
    try {
        console.log(list.set("Javier", 22));
    } catch(error) {
        console.error(error);    // El indice está fuera de los limites de la lista.
    }

    list.clear();
    
     // La lista está vacía.
    try {
        console.log(list.set("Javier", 0));
    } catch(error) {
        console.error(error);    // La lista está vacía.
    }
})();
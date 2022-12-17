"use strict";

/**
 * Clase List que crea una colección que permite
 * trabajar con cualquier tipo de valor.
 * @author Javier López
 * @version 1.0
 */
class List {
    // Propiedades privadas:
    #list;
    #capacity = 5;  // Tamaño máximo de la lista.

    constructor(list = []) {
        this.#list = list;
    }
}

/**
 * Subclase de List que contiene una lista que
 * admite objetos según el tipo de objeto que se
 * le pase al constructor.
 * @author Javier López
 * @version 1.0
 */
class ObjectList extends List {
    // Propiedades privadas.
    #list;
    #tyoe;

    constructor(type, list = []) {
        super(list);
        this.#tyoe = type;
        this.#list = list;
    }
}

/**
 * Subclase de List que contiene una lista de objetos
 * a la cuál se le puede pasar una función de ordenamiento.
 * @author Javier López
 * @version 1.0
 */
class OrderedObjectList extends List {
    // Propiedades privadas.
    #list;
    #type;
    #order;

    constructor(type, order, list = []) {
        super(type, list);
        this.#order = order;
        this.#type = type;
        this.#list = list;
    }
}

// ! Función de testeo.
(function() {
    const list = new List();
    console.log(list);
})();
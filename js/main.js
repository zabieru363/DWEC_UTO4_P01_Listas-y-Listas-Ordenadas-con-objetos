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

    /**
     * Constructor de la clase.
     * @param {*} list Una colección de elementos,
     * si no se le especifica ninguna por defecto será
     * un array.
     */
    constructor(list = []) {
        this.#list = list;
    }

    // * MÉTODOS PÚBLICOS DEL OBJETO

    /**
     * Método que comprueba si la lista está vacía.
     * @returns True si está vacía, false si no es así.
     */
    isEmpty() {
        return this.#list.length === 0;
    }

    /**
     * Método que comprueba si la lista está llena.
     * @returns True si está llena, false si no es así.
     */
    isFull() {
        return this.#list.length === this.#capacity;
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

    /**
     * Constructor de la clase.
     * @param {*} type El tipo de objetos con el que se quiere trabajar.
     * @param {*} list Una colección de elementos,
     * si no se le especifica ninguna por defecto será
     * un array.
     */
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

    /**
     * Constructor de la clase.
     * @param {*} type El tipo de objetos con el que se quiere trabajar.
     * @param {*} order Una función que ordene la lista.
     * @param {*} list Una colección de elementos,
     * si no se le especifica ninguna por defecto será
     * un array.
     */
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
"use strict";

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

    // * MÉTODOS SOBREESCRITOS DE LA HIJA

    /**
     * Método que añade un elemento a la lista.
     * @param {*} element El elemento a añadir.
     */
    add(element) {
        if(this.isFull()) {
            throw new Error("La lista está llena.");
        }

        if(this.#tyoe !== typeof element) {
            throw new Error("Tipo de dato no admitido para esta lista");
        }
        
        this.#list.push(element);
    }

    /**
     * Método que añade un elemento a la lista en la posición especificada.
     * @param {*} element El elemento a añadir.
     * @param {*} index La posición donde se va a añadir el elemento.
     * @returns El número de elementos de la lista.
     */
    addAt(element, index) {
        if(this.isFull()) {
            throw new Error("La lista está llena.");
        }

        // Cómo capacity es privado utilizo el método para acceder a su valor.
        if(index < 0 || index > this.capacity()) {
            throw new Error("El indice está fuera de los limites de la lista.");
        }

        if(this.#tyoe !== typeof element) {
            throw new Error("Tipo de dato no admitido para esta lista");
        }

        this.#list.splice(index, 0, element);
        return this.size();
    }
}
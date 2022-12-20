"use strict";

/**
 * Subclase de List que contiene una lista de objetos
 * a la cuál se le puede pasar una función de ordenamiento.
 * @author Javier López
 * @version 1.0
 */
class OrderedObjectList extends ObjectList {
    // Propiedades privadas.
    #list = [];
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
        this.#type = type;
        this.#order = order;
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

        if(this.#type !== typeof element) {
            throw new Error("Tipo de dato no admitido para esta lista");
        }
        
        this.#list.push(element);

        this.#order(this.#list);
    }
}
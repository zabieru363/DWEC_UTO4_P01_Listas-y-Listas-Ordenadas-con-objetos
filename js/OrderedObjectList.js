"use strict";

/**
 * Subclase de ObjectList que contiene una lista de elementos
 * de un tipo especificado a la cuál se le puede pasar una función de ordenamiento.
 * @author Javier López
 * @version 1.0
 */
class OrderedObjectList extends ObjectList {
    // * PROPIEDADES PRIVADAS
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
        if(!new.target) throw new InvalidAccessConstructorException();  // El constructor se crea con new.
        super(type, list);
        this.#type = type;
        this.#order = order;
        this.#list = list;
    }

    // * MÉTODOS SOBREESCRITOS DE LA HIJA

    /**
     * Método que añade un elemento a la lista. Después
     * de añadir el elemento ordena la lista.
     * Comprueba que el tipo es válido antes de añadir el elemento.
     * Ordena la lista, despues de añadir el elemento.
     * @param {*} element El elemento a añadir.
     */
    add(element) {
        if(this.isFull()) {
            throw new ListIsFullException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }
        
        this.#list.push(element);

        this.#order(this.#list);
    }

    /**
     * En esta clase addAt no se implementa.
     */
    addAt() {
        throw new NotImplementedException();
    }

    /**
     * En esta clase lastIndexOf no se implementa.
     */
    lastIndexOf() {
        throw new NotImplementedException();
    }

    /**
     * En esta clase set no se implementa.
     */
    set() {
        throw new NotImplementedException();
    }
}
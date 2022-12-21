"use strict";

/**
 * Subclase de List que contiene una lista que
 * solamente admite objetos del tipo que se le
 * pase en el constructor.
 * @author Javier López
 * @version 1.0
 */
class ObjectList extends List {
    // * PROPIEDADES PRIVADAS
    #list;
    #type;

    /**
     * Constructor de la clase.
     * @param {*} type El tipo de objetos con el que se quiere trabajar.
     * @param {*} list Una colección de elementos,
     * si no se le especifica ninguna por defecto será
     * un array.
     */
    constructor(type, list = []) {
        if(!new.target) throw new InvalidAccessConstructorException();  // El constructor se crea con new.
        super(list);
        this.#type = type;
        this.#list = list;
    }

    // * MÉTODOS SOBREESCRITOS DE LA HIJA

    /**
     * Método que añade un elemento a la lista.
     * Comprueba que el tipo es válido antes de añadir el elemento.
     * @param {*} element El elemento a añadir.
     */
    add(element) {
        if(this.isFull()) {
            throw new ListIsFullException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }
        
        return this.#list.push(element);
    }

    /**
     * Método que añade un elemento a la lista en la posición especificada.
     * Comprueba que el tipo es válido antes de añadir el elemento.
     * @param {*} element El elemento a añadir.
     * @param {*} index La posición donde se va a añadir el elemento.
     * @returns El número de elementos de la lista.
     */
    addAt(element, index) {
        if(this.isFull()) {
            throw new ListIsFullException();
        }

        // Cómo capacity es privado utilizo el método para acceder a su valor.
        if(index < 0 || index > this.capacity()) {
            throw new IndexOutOfBoundsListException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }

        this.#list.splice(index, 0, element);
        return this.size();
    }

    /**
     * Método que devuelve la posición del elemento que se
     * le pasa cómo parametro.
     * Comprueba que el tipo es válido antes de buscar el elemento.
     * @param {*} element El elemento del cuál se quiere obtener su posición.
     * @returns La posición del elemento, -1 si no lo encuentra.
     */
    indexOf(element) {
        if(this.isEmpty()) {
            throw new ListIsEmptyException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }

        return this.#list.findIndex(elem => elem === element);
    }

    /**
     * Método que devuelve la posición del elemento que se
     * le pasa cómo parametro pero comenzando por el final.
     * Comprueba que el tipo es válido antes de buscar el elemento.
     * @param {*} element El elemento del cuál se quiere obtener su posición.
     * @returns La posición del elemento, -1 si no lo encuentra.
     */
    lastIndexOf(element) {
        if(this.isEmpty()) {
            throw new ListIsEmptyException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }

        return this.#list.findLastIndex(elem => elem === element);
    }

    /**
     * Método que elimina el elemento que se le pasa cómo parametro
     * de la lista.
     * Comprueba que el tipo es válido antes de eliminar el elemento.
     * @param {*} element El elemento que se quiere eliminar.
     * @returns True si se ha podido eliminar, false si no es así.
     */
    removeElement(element) {
        if(this.isEmpty()) {
            throw new ListIsEmptyException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }

        let removed = false;
        const pos = this.indexOf(element);

        if(pos !== -1) {
            this.#list.splice(pos, 1);
            removed = true;
        }

        return removed;
    }

    /**
     * Método que reemplaza un elemento de la lista por
     * otro que se le pase cómo parametro en base a su indice.
     * Comprueba que el tipo es válido antes de modificar el elemento.
     * @param {*} element El elemento nuevo.
     * @param {*} index La posición donde se quiere empezar a cambiar.
     * @returns El elemento anterior.
     */
    set(element, index) {
        if(this.isEmpty()) {
            throw new ListIsEmptyException();
        }

        if(index < 0 || index > this.capacity()) {
            throw new IndexOutOfBoundsListException();
        }

        if(this.#type !== typeof element) {
            throw new InvalidTypeException();
        }

        return this.#list.splice(index, 1, element);
    }
}
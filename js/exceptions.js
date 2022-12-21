"use strict";

/**
 * Clase de excepción base que mejora las instancias
 * creadas de objetos Error.
 */
class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que un constructor haya
 * sido invocado sin new.
 */
class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El constructor no puede ser invocado sin new.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que la lista esté llena.
 */
class ListIsFullException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La lista está llena.", fileName, lineNumber);
        this.name = "ListIsFullException";
    }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que la lista esté vacía.
 */
class ListIsEmptyException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La lista está vacía.", fileName, lineNumber);
        this.name = "ListIsEmptyException";
    }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que los limites de
 * la capacidad de la lista hayan sido superados a la hora
 * de invocar métodos que trabajen con los index.
 */
class IndexOutOfBoundsListException extends BaseException {
    constructor(fileName, lineNumber) {
        super("El indice está fuera de los limites de la lista.", fileName, lineNumber);
        this.name = "IndexOutOfBoundsListException";
    }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que se introduzca un tipo
 * de dato o un elemento no válido en la lista.
 */
class InvalidTypeException extends BaseException {
    constructor(fileName, lineNumber) {
        super("Tipo de dato inválido para esta lista.", fileName, lineNumber);
        this.name = "InvalidTypeException";
    }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que un método de un objeto
 * no esté implementado.
 */
class NotImplementedException extends BaseException {
    constructor(fileName, lineNumber) {
        super("Este método no está implementado para esta clase", fileName, lineNumber);
        this.name = "NotImplementedException";
    }
}
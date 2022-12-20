"use strict";

class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El constructor no puede ser invocado sin new.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

class ListIsFullException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La lista está llena.", fileName, lineNumber);
        this.name = "ListIsFullException";
    }
}

class ListIsEmptyException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La lista está vacía.", fileName, lineNumber);
        this.name = "ListIsEmptyException";
    }
}

class IndexOutOfBoundsListException extends BaseException {
    constructor(fileName, lineNumber) {
        super("El indice está fuera de los limites de la lista.", fileName, lineNumber);
        this.name = "IndexOutOfBoundsListException";
    }
}

class InvalidTypeException extends BaseException {
    constructor(fileName, lineNumber) {
        super("Tipo de dato inválido para esta lista.", fileName, lineNumber);
        this.name = "InvalidTypeException";
    }
}

class NotImplementedException extends BaseException {
    constructor(fileName, lineNumber) {
        super("Este método no está implementado para esta clase", fileName, lineNumber);
        this.name = "NotImplementedException";
    }
}
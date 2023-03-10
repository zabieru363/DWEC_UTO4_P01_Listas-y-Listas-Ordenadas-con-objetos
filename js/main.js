"use strict";

/**
 * Variable JSON que hace de diccionario de colores para
 * mostrar con colores los mensajes por pantalla. 
 */
const dictionaryColors = {
    printMessage : "#00C2C8",
    methodTitle : "#00C800",
    className : "#FFB200",
    errorName : "#BA0000",

    setColor : function(color) {
        return "color: " + dictionaryColors[color];
    }
};

// ! Función de testeo.
(function() {
    // * Aqui creo un par de objetos book para comprobar el funcionamiento de la lista.
    const book = {
        ISBN: "914-46-6086-292-7",
        title: "El libro negro del programador",
        author: "Rafael Gómez Blanes",
        publicationDate: new Date(2014, 3, 4),
        price: 20.45,

        toString() {
            return this.ISBN + " " + this.title + " " +
            this.author + " " + this.publicationDate + " " + this.price;
        }
    };
    
    const book2 = {
        ISBN: "411-06-3922-591-3",
        title: "Un nuevo thriller trepidante",
        author: "Karen M. McManus",
        publicationDate: new Date(2018, 5, 22),
        price: 18,

        toString() {
            return this.ISBN + " " + this.title + " " +
            this.author + " " + this.publicationDate + " " + this.price;
        }
    };

    // Creando una lista:
    const list = new List();

    console.log("%cProbando a instanciar la clase sin new.", dictionaryColors.setColor("printMessage"));
    
    // ! No sale el mensaje que deberia porque ya hay una excepción TypeError que solventa ese problema.
    try {
        const noValid = List();
    }catch(error) {
        console.error(error); 
    }

    console.log("%cPROBANDO OBJETO LIST", dictionaryColors.setColor("className"));

    // * PROBANDO MÉTODOS DEL OBJETO LIST

    // ? IsEmpty:
    console.log("%cMétodo isEmpty", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.isEmpty(), dictionaryColors.setColor("printMessage"));    // True
    
    // ? IsFull:
    console.log("%cMétodo isFull", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.isFull(), dictionaryColors.setColor("printMessage")); // False.
    
    // ? Size
    console.log("%cMétodo size", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.size(), dictionaryColors.setColor("printMessage"));   // 0
    
    // ? Add
    console.log("%cMétodo add", dictionaryColors.setColor("methodTitle"));
    // Los añade todos.
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    list.add("Felipe");
    list.add("Marta");
    
    console.log("%cTamaño de la lista ahora " + list.size(), dictionaryColors.setColor("printMessage"));
    
    // ! ERRORES DE ADD:
    
    // La lista está llena.
    console.log("%cLa lista está llena", dictionaryColors.setColor("errorName"));
    try {
        list.add("otro");   // Este no lo añade.
    } catch(error) {
        console.error(error);   // Por lo que genera una excepción.
    }
    
    console.log("%cTamaño de la lista ahora " + list.size(), dictionaryColors.setColor("printMessage"));
    
    // ? Clear
    list.clear();   // Vacio la lista.
    
    console.log("%cTamaño de la lista ahora " + list.size(), dictionaryColors.setColor("printMessage"));
    
    // ? AddAt
    console.log("%cMétodo addAt", dictionaryColors.setColor("methodTitle"));
    
    // Los añade todos.
    console.log("%c" + list.addAt("Javier", 0), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list.addAt("María", 1), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list.addAt("Fernando", 2), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list.addAt("Felipe", 3), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list.addAt("María", 4), dictionaryColors.setColor("printMessage"));
    
    console.log("%cTamaño de la lista ahora " + list.size(), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE ADDAT:
    
    // La lista está llena.
    console.log("%cLa lista está llena", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.addAt("otro", 2));
    } catch(error) {
        console.error(error);   // La lista está llena.
    }
    
    list.clear();
    
    // El indice está fuera de los límites de la lista.
    console.log("%cEl indice está fuera de los límites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.addAt("otro", 22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los límites de la lista.
    }
    
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    // ? Get
    console.log("%cMétodo get", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.get(0), dictionaryColors.setColor("printMessage"));   // Javier
    console.log("%c" + list.get(1), dictionaryColors.setColor("printMessage"));   // María
    
    // ! PROBANDO ERRORES DE GET.

    list.clear();

    // La lista está vacía.
    console.log("%cLa lista está vacía..", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.get(0));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    // El indice está fuera de los limites de la lista.
    console.log("%cEl indice está fuera de los límites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.get(22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los limites de la lista.
    }
    
    // El elemento no existe en la lista.
    console.log("%cEl elemento no existe en la lista.", dictionaryColors.setColor("errorName"));
    console.log(typeof list.get(3) === "undefined" ? "No encontrado" : ""); // No encontrado.

    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    // ? ToString
    console.log("%cMétodo toString", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.toString(), dictionaryColors.setColor("printMessage"));   // Javier - María - Fernando
    
    // ! PROBANDO ERRORES DE TOSTRING
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
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
    console.log("%cMétodo indexOf", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.indexOf("Javier"), dictionaryColors.setColor("printMessage"));    // 0
    
    // ! PROBANDO ERRORES DE INDEXOF
    
    // El elemento no fue encontrado.
    console.log("%cEl elemento no fue encontrado.", dictionaryColors.setColor("errorName"));
    console.log(list.indexOf("Marta") === -1 ? "No encontrado" : "");   // No encontrado
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    list.clear();
    
    try {
        console.log(list.indexOf("Javier"));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    // ? LastIndexOf
    console.log("%cMétodo lastIndexOf", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log("%c" + list.lastIndexOf("Fernando"), dictionaryColors.setColor("printMessage"));  // 2
    
    // ! PROBANDO ERRORES DE LASTINDEXOF
    
    // Elemento no encontrado.
    console.log("%cEl elemento no fue encontrado.", dictionaryColors.setColor("errorName"));
    console.log(list.lastIndexOf("Marta") === -1 ? "No encontrado" : "");   // No encontrado.
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    list.clear();
    
    try {
        console.log(list.lastIndexOf("Javier"));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    // ? Capacity
    console.log("%cMétodo capacity", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list.capacity(), dictionaryColors.setColor("printMessage"));   // 5
    
    // ? FirstElement
    console.log("%cMétodo firstElement", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log("%c" + list.firstElement(), dictionaryColors.setColor("printMessage"));   // Javier
    
    // ! PROBANDO ERRORES DE FIRSTELEMENT
    
    list.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.firstElement());
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    // ? LastElement
    console.log("%cMétodo lastElement", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log("%c" + list.lastElement(), dictionaryColors.setColor("printMessage"));    // Fernando
    
    // ! PROBANDO ERRORES DE LASTELEMENT
    
    list.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.lastElement());
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    // ? Remove
    console.log("%cMétodo remove", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log(...list.remove(1)); // María
    
    // ! PROBANDO ERRORES DE REMOVE
    
    // El indice está fuera de los limites de la lista.
    console.log("%cEl indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.remove(22));
    } catch(error) {
        console.error(error);   // El indice está fuera de los limites de la lista.
    }
    
    list.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.remove(1));
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    // ? RemoveElement
    console.log("%cMétodo removeElement", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log("%c" + list.removeElement("María"), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE REMOVEELEMENT
    
    list.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.removeElement("María"));
    } catch(error) {
        console.error(error);    // La lista está vacía.
    }
    
    // ? Set
    console.log("%cMétodo set", dictionaryColors.setColor("methodTitle"));
    list.add("Javier");
    list.add("María");
    list.add("Fernando");
    
    console.log(...list.set("Zabieru", 0))
    
    // ! PROBANDO ERRORES DE SET
    
    // El indice está fuera de los limites de la lista.
    console.log("%cEl indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.set("Javier", 22));
    } catch(error) {
        console.error(error);    // El indice está fuera de los limites de la lista.
    }
    
    list.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        console.log(list.set("Javier", 0));
    } catch(error) {
        console.error(error);    // La lista está vacía.
    }

    // * COMPROBANDO QUE SE PUEDEN AÑADIR TAMBIÉN OBJETOS A LA LISTA.

    console.log("%cPROBANDO OBJETO LIST AÑADIENDO OBJETOS", dictionaryColors.setColor("className"));
    
    const list2 = new List();
    
    list2.add(book);
    list2.add("Javier");
    
    console.log("%cMétodo toString", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list2.toString(), dictionaryColors.setColor("printMessage"));
    
    console.log("%cMétodo indexOf", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list2.indexOf(book), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list2.indexOf("Javier"), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list2.indexOf(book2), dictionaryColors.setColor("printMessage"));
    
    console.log("%cMétodo lastIndexOf", dictionaryColors.setColor("methodTitle"));
    console.log("%c" + list2.lastIndexOf("Javier"), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list2.lastIndexOf(book), dictionaryColors.setColor("printMessage"));
    console.log("%c" + list2.lastIndexOf(book2), dictionaryColors.setColor("printMessage"));
    
    // * PROBANDO OBJETO OBJECTLIST
    
    console.log("%cPROBANDO OBJETO OBJECTLIST", dictionaryColors.setColor("className"));
    
    const oList = new ObjectList("number");

    console.log("%cProbando a instanciar la clase sin new.", dictionaryColors.setColor("printMessage"));
    // Porbando a instanciar esta clase sin el new.
    try {
        const noValid2 = ObjectList();
    } catch(error) {
        console.error(error);
    }

    // ! Solo probaré los métodos que he necesitado sobreescribir.
    
    // ? Add
    console.log("%cMétodo add", dictionaryColors.setColor("methodTitle"));
    // Añadiendo elementos que si son admitidos:
    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);
    
    console.log("%cTamaño de la lista ahora " + oList.size() + " elementos.", dictionaryColors.setColor("printMessage"));
    
    // ! ERRORES DE ADD

    // La lista está llena.
    console.log("%cLa lista está llena.", dictionaryColors.setColor("errorName"));
    try {
        oList.add(22);
    } catch(error) {
        console.error(error);   // La lista está llena.
    }

    oList.clear();
    
    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.add("2");
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }

    // ? AddAt
    console.log("%cMétodo addAt", dictionaryColors.setColor("methodTitle"));
    
    oList.clear();
    
    // Los añade todos:
    console.log("%c" + oList.addAt(1, 0), dictionaryColors.setColor("printMessage"));
    console.log("%c" + oList.addAt(2, 1), dictionaryColors.setColor("printMessage"));
    console.log("%c" + oList.addAt(3, 2), dictionaryColors.setColor("printMessage"));
    console.log("%c" + oList.addAt(4, 3), dictionaryColors.setColor("printMessage"));
    console.log("%c" + oList.addAt(5, 4), dictionaryColors.setColor("printMessage"));
    
    // ! ERRORES DE ADDAT.

    // La lista está llena.
    console.log("%cLa lista está llena.", dictionaryColors.setColor("errorName"));
    try {
        oList.addAt(22, 5);
    } catch(error) {
        console.error(error);   // La lista está llena.
    }

    oList.clear();

    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.addAt("algo", 4);
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }
    
    // ? IndexOf
    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);

    console.log("%cMétodo indexOf", dictionaryColors.setColor("methodTitle"));

    console.log("%c" + oList.indexOf(1), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE INDEXOF.

    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.indexOf("algo");
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }

    oList.clear();

    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        oList.indexOf(2);
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);

    // ? LastIndexOf
    console.log("%cMétodo lastIndexOf", dictionaryColors.setColor("methodTitle"));
    
    console.log("%c" + oList.lastIndexOf(1), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE LASTINDEXOF.
    
    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.lastIndexOf("algo");
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }

    oList.clear();

    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        oList.lastIndexOf(2);
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);
    
    // ? RemoveElement
    console.log("%cMétodo removeElement", dictionaryColors.setColor("methodTitle"));
    
    console.log("%c" + oList.removeElement(4), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE REMOVEELEMENT.
    
    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.removeElement("algo");
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }

    oList.clear();

    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        oList.removeElement(2);
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }

    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);
    
    // ? Set
    console.log("%cMétodo set", dictionaryColors.setColor("methodTitle"));
    
    console.log("%c" + oList.set(34, 2), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO ERRORES DE SET.
    
    // Tipo de dato no admitido en esta lista.
    console.log("%cTipo de dato no admitido en esta lista", dictionaryColors.setColor("errorName"));
    try {
        oList.set("random", 2);
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en esta lista.
    }
    
    oList.clear();
    
    // La lista está vacía.
    console.log("%cLa lista está vacía.", dictionaryColors.setColor("errorName"));
    try {
        oList.set(32, 2);
    } catch(error) {
        console.error(error);   // La lista está vacía.
    }
    
    oList.add(1);
    oList.add(2);
    oList.add(3);
    oList.add(4);
    oList.add(5);
    
    // El indice está fuera de los limites de la lista.
    console.log("%cEl indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        oList.set(32, 20);
    } catch(error) {
        console.error(error);   // El indice está fuera de los limites de la lista.
    }
    
    console.log("%cMétodo toString", dictionaryColors.setColor("printMessage"));
    console.log("%c" + oList.toString(), dictionaryColors.setColor("printMessage"));
    
    // * PROBANDO OBJETO ORDEREDOBJECTLIST
    
    // Aquí creo la función de ordenamiento que utilizaré
    const orderFunction = function(array) {
        array.sort(function(a, b) {
            // Si es un objeto
            if(a instanceof Object) {
                // Ordenaremos por la primera propiedad:
                const first = Object.keys(a)[0];    // Guardamos la primera propiedad del objeto.
                
                if(typeof first === "string") {
                    return a[first].localeCompare(b[first]);
                } else {
                    return a - b;
                }
            }
            
            if(typeof a === "string") {
                return a.localeCompare(b);
            }
            
            if(typeof a === "number") {
                return a - b;
            }
        });
    };
    
    console.log("%cPROBANDO OBJETO ORDEREDOBJECTLIST", dictionaryColors.setColor("className"));
    
    const orderedList = new OrderedObjectList("string", orderFunction);

    console.log("%cProbando a instanciar la clase sin new.", dictionaryColors.setColor("printMessage"));

    try {
        const noValid3 = OrderedObjectList();
    }catch(error) {
        console.error(error);
    }
    
    // ? Add
    console.log("%cMétodo add", dictionaryColors.setColor("methodTitle"));
    orderedList.add("Javier");
    orderedList.add("Kevin");
    orderedList.add("Marta");
    orderedList.add("Eduardo");
    orderedList.add("Felipe");
    
    console.log("%cTotal de elementos de la lista ahora " + orderedList.size(), dictionaryColors.setColor("printMessage"));

    // ! ERRORES DE ADD
    
    // La lista está llena.
    console.log("%cLa lista está llena.", dictionaryColors.setColor("errorName"));
    try {
        orderedList.add("Hugo");
    } catch(error) {
        console.error(error);   // La lista está llena.
    }
    
    orderedList.clear();
    
    // Tipo de dato no admitido en lista.
    console.log("%cTipo de dato no admitido en lista.", dictionaryColors.setColor("errorName"));
    try {
        orderedList.add(2);
    } catch(error) {
        console.error(error);   // Tipo de dato no admitido en lista.
    }
    
    orderedList.add("Javier");
    orderedList.add("Kevin");
    orderedList.add("Marta");
    orderedList.add("Eduardo");
    orderedList.add("Felipe");
    
    console.log("%cMostrando lista ordenada", dictionaryColors.setColor("printMessage"));
    console.log("%c" + orderedList.toString(), dictionaryColors.setColor("printMessage"));
    
    // ! INTENTANDO USAR MÉTODOS QUE NO ESTÁN IMPLEMENTADOS EN ORDEREDOBJECTLIST
    
    console.log("%cINTENTANDO USAR MÉTODOS QUE NO ESTÁN IMPLEMENTADOS EN ORDEREDOBJECTLIST", dictionaryColors.setColor("printMessage"));
    
    // ? Addat
    console.log("%cMétodo addAt", dictionaryColors.setColor("methodTitle"));
    try {
        orderedList.addAt();
    } catch(error) {
        console.error(error);   // Este método no está implementado para esta clase.
    }

    // ? LastIndexOf
    console.log("%cMétodo lastIndexOf", dictionaryColors.setColor("methodTitle"));
    try {
        orderedList.lastIndexOf();
    } catch(error) {
        console.error(error);   // Este método no está implementado para esta clase.
    }

    // ? Set
    console.log("%cMétodo set", dictionaryColors.setColor("methodTitle"));
    try {
        orderedList.set();
    } catch(error) {
        console.error(error);   // Este método no está implementado para esta clase.
    }

    console.log("%cUSANDO UN ARRAY YA CONSTRUIDO", dictionaryColors.setColor("className"));

    const example = ["xnombre1", "anombre2", "cnombre3", "pnombre4"];

    // Esta vez le pasamos a la instancia un array creado ya previamente.
    const orderedList2 = new OrderedObjectList("string", orderFunction, example);

    console.log("%cUtilizando algunos métodos para demostrar su funcionamiento:", dictionaryColors.setColor("printMessage"));
    console.log("%cElemento " + orderedList2.get(2), dictionaryColors.setColor("printMessage"));

    console.log("%c" + orderedList2.toString(), dictionaryColors.setColor("printMessage"));
})();
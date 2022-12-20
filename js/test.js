"use strict";

(function() {
    const orList = new OrderedObjectList("string", (a, b) => a - b);
    console.log(orList);
})();
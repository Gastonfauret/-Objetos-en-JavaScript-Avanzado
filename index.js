/* Arreglo de Objetos */
/* Un arreglo con 3 objetos, que tienen, a su vez, tiene su conjunto de propiedades y valores */

var ordenesDePizzas = [
    {"tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": ["extra queso", "champiñones", "piña"],
    "parallevar": true},

    {"tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": ["extra queso", "pimenton"],
    "paraLlevar": false},
    
    {"tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true},

];

//console.log(ordenesDePizzas[0]); // Imprime: {tipo: 'margarita', tamaño: 'individual', precio: 5.67, toppings: Array(3), parallevar: true}
//console.log(ordenesDePizzas[1]); // Imprime: {tipo: 'cuatro quesos', tamaño: 'familiar', precio: 18.34, toppings: Array(2), paraLlevar: false}

/*Notacion de punto */

//console.log(ordenesDePizzas[0].tipo); // Imprime: margarita
//console.log(ordenesDePizzas[0].toppings); // Imprime: ["extra queso", "champiñones", "piña"]

/*Notacion de corchete */

//console.log(ordenesDePizzas[0]["precio"]); // Imprime: 5.67
//console.log(ordenesDePizzas[0]["toppings"]); // Imprime: ["extra queso", "champiñones", "piña"]

/* Objetos Anidados */

var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "manteca": "200 grs"
        }
    }
};

/*Notacion de punto */

console.log(miReceta.descripcion); // Imprime: mi postre favorito
console.log(miReceta.costo); // Imprime: 15.6
console.log(miReceta.ingredientes); // Imprime: {masa: {…}, cobertura: {…}}
console.log(miReceta.ingredientes.masa); // Imprime: {harina: '100 grs', sal: '1 cucharadita', agua: '1 taza'}
console.log(miReceta.ingredientes.masa.harina); // Imprime: 100 grs

console.log(miReceta.ingredientes.cobertura); // Imprime: {azucar: '120 grs', chocolate: '4 cucharadas', manteca: '200 grs'}
console.log(miReceta.ingredientes.cobertura.azucar); // Imprime: 120 grs

/*Notacion de corchete */

console.log(miReceta["descripcion"]); // Imprime: mi postre favorito
console.log(miReceta["costo"]); // Imprime: 15.6
console.log(miReceta["ingredientes"]); // Imprime: {masa: {…}, cobertura: {…}}
console.log(miReceta["ingredientes"]["masa"]); // Imprime: {harina: '100 grs', sal: '1 cucharadita', agua: '1 taza'}
console.log(miReceta["ingredientes"]["masa"]["harina"]); // Imprime: 100 grs

/* Arreglos Anidados */
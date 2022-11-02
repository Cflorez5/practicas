// Constantes
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;


// Entrada

var products = [
{
description: "Goma de borrar",
price: 0.25,
tax: LOWER_TYPE,
stock: 2,
units: 0,
},
{
description: "Lápiz H2",
price: 0.4,
tax: LOWER_TYPE,
stock: 5,
units: 0,
},
{
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Papelera plástico",
price: 2.75,
tax: REGULAR_TYPE,
stock: 5,
units: 0,
},
{
description: "Escuadra",
price: 8.4,
tax: REGULAR_TYPE,
stock: 3,
units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Afilador",
price: 1.2,
tax: LOWER_TYPE,
stock: 10,
units: 0,
},
{
description: "Libro ABC",
price: 19,
tax: EXEMPT_TYPE,
stock: 2,
units: 0,
},
];



// // Apartado 1. Función de mi lista de productos
var showProducts = productList => {
    // Acceder al div - product-list-container
    var container = document.getElementById("product-list-container");

    for (var product of productList) {
        var description = document.createElement("h3");
        
        description.innerText = product.description;
        //Introducir en container => description
        container.appendChild(description);
    }
}

showProducts(products);

// Apartado 2. Función de mi lista de inputs para cada producto
var showInputs = inputList => {
    var containerInput = document.getElementById("list-input")

    for (input of inputList) {
        var numbersInput = document.createElement("input")
        numbersInput.setAttribute("type", "number");
            numbersInput.setAttribute("label", products.description);
            numbersInput.setAttribute("min", 0)


        numbersInput.innerText = input.units;
        containerInput.appendChild(numbersInput)
    }
}
showInputs(products);
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

//Crear tu HTML Dinámico

//Enganchar tus elementos

//Iterar/recorrer la lista con un bucle para calcular la factura, y hacer los cálculos pertinentes para cada producto:
//    - El precio total de un producto será el precio unitario * unidades (coste total = )
//  - El IVA a pagar por un producto será precio total producto * IVA / 100 . (iva = products.price * products.tax / 100)

//Calcular Subtotal, IVA y Total:
//         - Hacer una suma sin el impuesto
//         - Hacer una suma del impuesto por separado
//         - Hacer una suma del total

//Extra: Botón habilitado

var createProduct = product => {
             
    // Enganchar elementos - HTML dinámico
    var containerProduct = document.getElementById("product-list-container");
    var containerInput = document.getElementById("list-input")
   
    // Creación elementos HTML con sus atributos
    var description = document.createElement("h3");
    var numbersInput = document.createElement("input")
        numbersInput.setAttribute("type", "number");
        numbersInput.setAttribute("label", product.description);
        numbersInput.setAttribute("value", 0)
        numbersInput.setAttribute("min", 0)
        numbersInput.setAttribute("max", product.stock)
        numbersInput.setAttribute("style", "background-color:#132737");

//Apartado 2. Guardar mi value
    numbersInput.addEventListener("change", event => {
        product.units = event.target.valueAsNumber;
        //Este isDisable sirve para siempre que se modifique "change"
        document.getElementById("btn-calculate").disabled = isDisable();
    });

//Contenido de los elementos
    description.innerText = product.description;
    numbersInput.innerText = product.units;
    
//Introducir en container => description & numbersInput
    containerProduct.appendChild(description);
    containerInput.appendChild(numbersInput)
}

// Apartado 1. Función de mi lista de productos (+sus inputs)
var showProducts = productList => {

    for (var product of productList) {
        createProduct(product)
    }

}
showProducts(products);

//5. Total
var totalResult = () => {
    var total = showSubtotal() + showIva();

    // Engancharlo a text-subtotal
    document.getElementById("text-subtotal").innerText = showSubtotal();
    // Engancharlo a text-iva
    document.getElementById("text-iva").innerText = showIva();
    // Engancharlo a text-total
    document.getElementById("text-total").innerText = total;

};

document.getElementById("btn-calculate").addEventListener("click", totalResult);

//3. Subtotal
var showSubtotal = () => {
   var productSubtotal = 0;

    for (const product of products) {
        productSubtotal += product.units * product.price;
    }  return productSubtotal

}


//4. IVA de cada producto
function showIva() {
    var productIva = 0;

    for (const product of products) {
        productIva += (product.price * product.units) * product.tax / 100;
    } return productIva

 }

//6. Opcional. Botón habilitado / deshabilitado
var isDisable = () => {

    for (const product of products) {
        if (product.units > 0) {
            return false;
        }
    } 
    return true;

}

//Este isDisable sirve para la primera ejecución
document.getElementById("btn-calculate").disabled = isDisable();
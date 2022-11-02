/** Un producto dentro de una línea del carrito de compra contiene la siguiente información:
 * Nombre del producto
 * Precio unitario
 * Cantidad
 * Indicador para saber si el producto es premium
 */

const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

//Mostrar carrito de la compra
// var products = carrito;

for (products of carrito){
    imprimir(products)
}

function imprimir(products){
    console.log(" --------> Carrito de la compra <----------")
    for(propiedad in products)
    console.log (propiedad + ":" + products[propiedad]);
}


// //Listar todos los productos

function listarCarrito() {  
    for(propiedad of carrito)
    console.log("Los productos son: " + propiedad.name);
}

listarCarrito();

// // Eliminar el producto con id 54657 del carrito de la compra.
//    for (i=0; i < carrito.length; i++){
//        if (carrito[i].id === 54657)
//        carrito.splice (i , 1) // 1 es la cantidad de elementos que elimina e i el índice a eliminar
//     }
//     console.log(carrito)


// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
let total = 0

function totalCarrito(){

    for (products of carrito){
        return total += products.price * products.count
     }

}

console.log("El precio total es: " + totalCarrito());

// // // Filtrar por los productos que sean prime.

function isPrime(){
    for(products of carrito){
        if(products.premium === true)
        imprimir(products)
    }
}

isPrime();


// //-------->OPCIONAL<-------------//
// // Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
function primeProducts(){  
    for(products of carrito){
        if (products.premium === true){
        console.log("Este pedido no tiene gastos de envío")
    }else if(products.premium === false){
    console.log("Este pedido si tiene gastos de envío")
        }
    }
}

primeProducts();


// // Mostrar el carrito en un listado de html básico.
var product = carrito;
var lista = document.getElementById("list")

function listCarrito(){  
    for (product of carrito){
        var elemento = document.createElement("li");
        elemento.innerText = product.name
        lista.appendChild(elemento)
    }
}
listCarrito();

//Crear cada li que va a contener cada producto de la lista (createElement())



// // // Aplicar un descuento del 5% si la compra es mayor de 100

function discountProducts(){  
    for(products of carrito){
        if(total < 100){
        console.log(total)
        }else if(total >= 100){
        console.log("Tiene un 5% de descuento: " + total * 0.5)
        }
    }
}

discountProducts();
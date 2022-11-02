const product = { count: 3, price: 12.55, type: "ropa"}
const product1 = { count: 3, price: 12.55, type: "alimentacion"}
const product2 = { count: 3, price: 12.55, type: "libros"}
const product3 = { count: 3, price: 12.55, type: "otros"}

//Calcular precio total de la compra de un producto
const total = product.count * product.price;
console.log(total)

// //Aplicar descuento del 21%
const discount = total * 0.21;
console.log(discount)

// Producto sin IVA
let sinIva = total - discount;
console.log(sinIva)

//Aplicar descuento del 10% y del 4%
let discount1 = total * 0.10;
console.log (discount1)

let discount2 = total * 0.4;
console.log (discount2)


/**
 * Aplicar descuento del 10% y del 4% según producto
 * Alimentación
 */
if (product.type1 != product.type && product2.type) {
    console.log ("Se aplica el 10%: ", discount1)
} else {
    console.log ("Se aplica el 21%: ", discount)
}

//Libros
if (product.type2 != product.type && product1.type) {
    console.log ("Se aplica el 4%: ", discount2)
} else {
    console.log ("Se aplica el 21%: ", discount)
}

//Aplicar 21% en cualquier otro producto
if (product.type3 != product1.type && product2.type) {
    console.log ("Se aplica el 21%: ", discount)
}


//Aplicar descuento según producto con switch
const products = 1; 

switch (products){
    case 1: 
    console.log ("Se aplica el 21%: ", discount)
    break;
    case 2:
    console.log ("Se aplica el 10%: ", discount1)
    case 3: 
    console.log ("Se aplica el 4%: ", discount2)
    break;
}

//EXTRA: Calcular sueldo neto en nómina
const empleado = {
    bruto: 14.500,
    hijos: 4,
    pagas: 14,
}

//Retención del 0%
if (empleado.bruto < 12.000){
    console.log("La retención es de 0%")
} else {
    console.log("La retención es mayor")
}


//Retención del 8%
let total_extra = empleado.bruto * 0.8;

if (empleado.bruto < 24.000){
    console.log("La retención es del 8%: " , total_extra)

}

//Retención del 16%
let total_extra1 = empleado.bruto * 0.16;
if (empleado.bruto < 34.000){
    console.log("La retención es del 16%: " , total_extra1)
}

//Retención del 30%
let total_extra2 = empleado.bruto * 0.30;

if (empleado.bruto > 34.000){
    console.log("La retención es del 30%: " , total_extra2)
} else {
    console.log("La retención es menor del 30%")
}


//Hijos
if (empleado.hijos < 1){
    console.log("La retención es 0%: ")
} else {
    console.log("La retención por hijos baja dos puntos: ", total_extra1 * 0.2)
}

//Neto mensual
let netomensual = empleado.bruto / 12
console.log (netomensual)

let brutomensual = netomensual * 0.8;
console.log (brutomensual)
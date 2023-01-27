// Carrito compra

/**
 * Cada producto:
 *    - Nombre
 *    - Cantidad compra de cada uno
 *    - Precio
 *    - Tipo IVA
 */

//Queremos calcular:
/** - El subtotal de la compra (suma de producto por cantidad sin contar con el IVA).
 *  - El total de la compra (subtotal + IVA).
 */

cesta = [
  {
    nombre: "Cerveza",
    cantidad: 1,
    precio: 2,
    tipoIVA: "general",
  },
  {
    nombre: "Galletas",
    cantidad: 3,
    precio: 1,
    tipoIVA: "reducido",
  },
  {
    nombre: "pan",
    cantidad: 4,
    precio: 0.5,
    tipoIVA: "superreducido",
  },
];

// Calculando el subtotal

class carritoDeLaCompra {
  constructor() {
    this._cesta = [];
    this._subtotal = 0;
  }

  calculaSubtotal() {
    this._subtotal = 0;

    this._subtotal = this._cesta.reduce(
      (acumulado, lineaTicket) =>
        acumulado + lineaTicket.cantidad * lineaTicket.precio,
      0
    );
  }
}

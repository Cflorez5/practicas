const reservas = [
  {
    tipoHabitacion: "standard",
    precio: 100,
    pax: 1,
    adicionales: 0,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    precio: 100,
    adicionales: 0,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    precio: 150,
    adicionales: 40,
    pax: 2,
    noches: 1,
  },
];

class clasePadre {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
    this.iva = 1.21;
    this.descuento = 0;
  }

  paxAdicional(personas) {
    return personas > 1 ? --personas * 40 : 0;
  }

  calcularSubtotal() {
    this._subtotal = reservas.reduce(
      (acc, { tipoHabitacion, pax, noches }) =>
        acc +
        this.calcularPrecioHab(tipoHabitacion) * noches +
        this.paxAdicional(pax) - this.descuento,
      0
    );
  }

  calcularTotal() {
    this._total = this._subtotal * this.iva;
  }

  //get
  get subTotal() {
    return this._subtotal.toFixed(0);
  }

  get total() {
    return this._total.toFixed(0);
  }

  //set
  set reservas(reservas) {
    this._reservas = reservas;
    this.calcularSubtotal();
    this.calcularTotal();
  }

 }


 class clienteParticular extends clasePadre {
  constructor() {
    super();
  }

  calcularPrecioHab(tipoHabitacion) {
    if (tipoHabitacion === "standard") {
      return 100;
    } else {
      return 150;
    }
  }

 }

 const ReservaCliente = new clienteParticular();
 ReservaCliente.reservas = reservas;
 console.log("La reserva del desafío del cliente es " + ReservaCliente.subTotal)
 console.log("La reserva del desafío del cliente es " + ReservaCliente.total)


class clienteOperador extends clasePadre {
  constructor() {
    super();
    this.descuento = 1.15;
  }

  calcularPrecioHab() {
      return 100;
    }
  }

const ReservaOperador = new clienteOperador();
ReservaOperador.reservas = reservas;
console.log("La reserva del desafío del operador es " + ReservaOperador.subTotal)
console.log("La reserva del desafío del operador es " + ReservaOperador.total)



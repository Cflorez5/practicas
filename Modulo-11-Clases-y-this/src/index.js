console.log("---------------> CASO 1 <---------------");
// Reserva de Hotel
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

// CASO 1
/**
 * Crear una clase que reciba la lista de reservas
 * Calcular el subtotal (suma de habitación por cantidad sin contar con el IVA)
 * Calcular el total (suma de habitación por cantidad con el IVA)
 *
 */

class listaReservas {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
    this.iva = 1.21;
  }

  calcularPrecioHab(tipoHabitacion) {
    if (tipoHabitacion === "standard") {
      return 100;
    } else {
      return 150;
    }
  }

  paxAdicional(personas) {
    return personas > 1 ? --personas * 40 : 0;
  }

  calcularSubtotal() {
    this._subtotal = reservas.reduce(
      (acc, { tipoHabitacion, pax, noches }) =>
        acc +
        this.calcularPrecioHab(tipoHabitacion) * noches +
        this.paxAdicional(pax),
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

const reserva = new listaReservas();
reserva.reservas = reservas;
console.log("El subtotal es: " + reserva.subTotal);
console.log("El total es: " + reserva.total);

console.log("------------------------------");
console.log("---------------> CASO 2 <---------------");

// CASO 2
/**
 * Crear una clase que herede de la primera
 * Calcular el subtotal
 * Calcular el total
 * 15% de descuento a los servicios contratados
 *
 */

class reservaOperador extends listaReservas {
  constructor() {
    super();
    this.descuento = 1.15;
  }

  calcularPrecioHab() {
    return 100;
  }

  calcularSubtotal() {
    // super.calcularSubtotal(); Esto se usa para llamar a un método del padre. No hace falta porque la hemos modificado abajo.
    this._subtotal = reservas.reduce(
      (acc, { pax, noches }) =>
        acc +
        this.calcularPrecioHab() * noches +
        this.paxAdicional(pax) - this.descuento,
      0
    );
  }

  calcularTotal() {
    this._total = this._subtotal * this.iva;
  }
}

const reservasOperador = new reservaOperador();
reservasOperador.reservas = reservas;
console.log("El subtotal del operador es: " + reservasOperador.subTotal);
console.log("El total del operador es: " + reservasOperador.total);

console.log("------------------------------");
console.log("---------------> DESAFÍO <---------------");

// DESAFÍO
/**
 * Crear una clase padre con la funcionalidad común
 * Crear dos clases hijas: una con el caso para cliente particular y otra para tour operador.
 * En el constructor de la clase base, introduce la lista de precios de habitaciones
      - ¿Qué tendrás que hacer para que en el hijo puedas inicializar la clase?
 *
 */

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
        this.paxAdicional(pax) -
        this.descuento,
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
console.log("La reserva del desafío del cliente es " + ReservaCliente.subTotal);
console.log("La reserva del desafío del cliente es " + ReservaCliente.total);

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
console.log(
  "La reserva del desafío del operador es " + ReservaOperador.subTotal
);
console.log("La reserva del desafío del operador es " + ReservaOperador.total);

console.log("------------------------------");
console.log("---------------> EJERCICIO ADICIONAL <---------------");
// EJERCICIO ADICIONAL
/**
 * Con desayuno, cargo adicional de 15 € por persona y noche
 * Calcular el subtotal (para particular como tour operador)
 * Calcular el total (para particular como tour operador)
 *
 */

const reservaDesayunos = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    precioHab: 100,
    precioDesayuno: 0,
    persona: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    precioDesayuno: 0,
    precioHab: 100,
    persona: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    precioDesayuno: 15,
    precioHab: 150,
    persona: 2,
    noches: 1,
  },
];

class listaReservasDesayunoCliente {
  constructor() {
    this._reservaCliente = [];
    this._subtotal = 0;
    this._total = 0;
    this.iva = 1.21;
  }

  calcularPrecioHab(tipoHabitacion) {
    if (tipoHabitacion === "standard") {
      return 100;
    } else {
      return 150;
    }
  }

  desayunoAdicional(persona, noches, desayuno, precioDesayuno) {
    if (desayuno === true) {
      return persona * precioDesayuno + noches * precioDesayuno;
    } else return 0;
  }

  calcularSubtotal() {
    this._subtotal = reservaDesayunos.reduce(
      (acc, { tipoHabitacion, persona, noches }) =>
        acc +
        this.calcularPrecioHab(tipoHabitacion) * noches +
        this.desayunoAdicional(persona, noches),
      0
    );
  }

  calcularTotal() {
    this._total = this._subtotal * this.iva;
  }

  //get
  get subTotal() {
    return this._subtotal;
  }

  get total() {
    return this._total.toFixed(0);
  }

  //set
  set reservaDesayunos(reservaDesayunos) {
    this._reservaCliente = reservaDesayunos;
    this.calcularSubtotal();
    this.calcularTotal();
  }
}

const reservasCliente = new listaReservasDesayunoCliente();
reservasCliente.reservaDesayunos = reservaDesayunos;
console.log(
  "El subtotal del cliente con desayuno es: " + reservasCliente.subTotal
);
console.log("El total del cliente con desayuno es: " + reservasCliente.total);

class listaReservasDesayunoOperador extends listaReservasDesayunoCliente {
  constructor() {
    super();
  }

  calcularPrecioHab() {
    return 100;
  }

  calcularSubtotal() {
    super.calcularSubtotal();
  }

  calcularTotal() {
    super.calcularTotal();
  }
}

const reservasOperadorDesayuno = new listaReservasDesayunoOperador();
reservasOperadorDesayuno.reservaDesayunos = reservaDesayunos;
console.log(
  "El subtotal del operador con desayuno es: " +
    reservasOperadorDesayuno.subTotal
);
console.log(
  "El total del operador con desayuno es: " + reservasOperadorDesayuno.total
);

console.log("------------------------------");

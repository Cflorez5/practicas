// hasId
console.log("-------------------- hasId ---------------------");
clients = [
  {
    id: 1,
    first_name: "Javier",
    last_name: "Lamey",
    mail: "jlamey0@discuz.net",
  },
];

const hasId = (client) => client.some((client) => client.id);
console.log(hasId(clients));

console.log("-------------------------------------------------");

// head
console.log("-------------------- head ---------------------");
const company = ["LemonCode", "Airbus", "Amazon", "Vodafone"];

const [first, ,] = company;
console.log(first);

console.log("-------------------------------------------------");

// tail
console.log("-------------------- tail ---------------------");
const teachers = ["Javi", "Antonio", "Cristina", "Ana"];
const tail = ([, ...restItems]) => restItems;
console.log(tail(teachers));

console.log("-------------------------------------------------");

// swapFirstToLast
console.log("-------------------- swapFirstToLast ---------------------");
const cars = ["Audi", "Golf", "MBW", "Mazda"];
const reversed = cars.reverse();

const swapFirstToLast = ([...restItems]) => restItems;
console.log(swapFirstToLast(reversed));

console.log("-------------------------------------------------");

// excludeId
console.log("-------------------- excludeId ---------------------");

const object = {
  id: 12,
  name: "Pencil",
  color: "Red",
};

const excludeId = ({ name, color }) => name + " " + color;
console.log(excludeId(object));
console.log("-------------------------------------------------");

// wordsStartingWithA (sacar solo los que empiezan por A)
console.log("-------------------- wordsStartingWithA  ---------------------");
const words = ["Ana", "Arturo", "Marcos", "María", "Eric", "Alvaro"];

const wordsStartingWithA = (words) => words.filter((word) => word[0] === "A");
console.log(wordsStartingWithA(words));

console.log("-------------------------------------------------");

//concat
console.log("-------------------- concat ---------------------");
const concat = ["one", "two", "three"];
console.log(concat.join(" | "));

console.log("-------------------------------------------------");

//multArray
console.log("-------------------- multArray ---------------------");
const number = [2, 4];

const multArray = (number, x) => number.map((number) => number * x);
console.log(multArray(number, 2));

//calcMult
console.log("-------------------- calcMult ---------------------");
const numbers = [1, 2, 3, 4];

const calcMult = (numbers) => numbers.reduce((acc, value) => acc + value, 0);
console.log(calcMult(numbers));

console.log("-------------------------------------------------");
console.log("---------------Ejercicios Extra----------------------");

//Ejercicios Extra
//swapFirstSecond
console.log("--------------- swapFirstSecond ----------------------");

const nameCars = ["Audi", "Golf", "MBW", "Mazda"];

const swapFirstSecond = ([firsItem, secondItem, ...restItems]) => [
  secondItem,
  firsItem,
  ...restItems,
];
console.log(swapFirstSecond(nameCars));

console.log("-------------------------------------------------");

// firstEqual
console.log("--------------- firstEqual ----------------------");
const booksCollection = [
  { name: "La viuda negra", read: true },
  { name: "La chica del tren", read: false },
  { name: "La sombra del viento", read: false },
];

const firstEqual = (books) => books.every((book) => book.name);
console.log(firstEqual(booksCollection));
console.log("-------------------------------------------------");

// longest
console.log("--------------- longest ----------------------");

const names = ["Javi", "Antonio", "Mario"];
const people = (hi, name1, name2, name3) => {
  console.log(hi + " " + name1 + ", " + name2 + " y " + name3);
};

people("Buenos días", ...names);

//Otro ejemplo
const weekend = ["sábado", "domingo"];
const workDays = ["lunes", "martes", "miércoles", "jueves", "viernes"];

const week = [...workDays, ...weekend];
console.log(week);

console.log("-------------------------------------------------");

// searchInStringV1
console.log("--------------- searchInStringV1 ----------------------");

const shoppingBag = [
  { name: "Pescado", price: 25, product: "standard", offers: false },
  { name: "Carne", price: 15, product: "superior", offers: false },
];

const searchInStringV1 = (product) =>
  product.reduce((offers, product) => {
    if (!product.offers) offers++;
    return offers;
  }, "");

console.log(searchInStringV1(shoppingBag));
console.log("-------------------------------------------------");

// searchInStringV2
// console.log("--------------- searchInStringV2 ----------------------");

// const world = ["Mi Mundo Marrón"];

// const searchInStringV2 = (st, character) => character.map((letter) => letter , st);
// console.log(searchInStringV2(world, "M"));

// console.log("-------------------------------------------------");
// sortCharacters
console.log("----------------- sortCharacters -------------------------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sortCharacters = (fruits) => fruits.sort();
console.log(sortCharacters(fruits));
console.log("-------------------------------------------------");

// shout
console.log("--------------- shout ----------------------");

myLetters = ["¡", "j", "o", "i", "n", "!"];
console.log(myLetters.join(" ").toUpperCase());
console.log("-------------------------------------------------");

// Lista de la compra
console.log("--------------- Lista de la compra ----------------------");

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

//1. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const taxIva = (tax) => tax.map((shopping) => shopping.price * 1.21);
console.log(taxIva(shoppingCart));

//2. Ordena la lista de más a menos unidades.
const sortShopping = (units) => units.sort((a, b) => b.units - a.units);
console.log(sortShopping(shoppingCart));

//3. Obtén el subtotal gastado en droguería. (shopping.units * shopping.price)
const getSubtotal = (price, category) =>
  price.reduce((sumPrice, product) => sumPrice + product.units, 0);
console.log(getSubtotal(shoppingCart, "Droguería"));

//4. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

//Caso 1. Validar que se informa con dos letras y los números correspondientes.
console.log( "--------> CASO 1 <--------");
const pattern = /^[A-Z]{2}\d{22}$/;

const values = ['ES6600190020961234567890'];

values.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern.test(value));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
// Caso 2. Vamos a permitir que se incluyan espacios en ciertas áreas.
console.log( "--------> CASO 2 <--------");
const pattern1 = /^[A-Z]{2}\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

const values1 = ['ES66 0019 0020 9612 3456 7890'];

values1.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern1.test(value));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
//Caso 3. Vamos a extraer el código de páis y el dígito de control.
console.log( "--------> CASO 3. Código País <--------");
const pattern2 = /^ES/;

const ibanES = ['ES66 0019 0020 9612 3456 7890'];

console.log(pattern2.exec(ibanES));


console.log( "--------------------------------");

console.log( "--------> CASO 3. Dígito de Control <--------");
const pattern3 = /66/;

const numControl = ['ES6600190020961234567890'];

console.log(pattern3.exec(numControl));

console.log( "--------------------------------");
console.log( "--------------------------------");

//Caso 1. Validar una matrícula de coche moderna. 4 digitos y tres letras
console.log( "--------> Validar matrícula coche <--------");
const pattern4 = /\d{4}[A-Z]{3}/;

const valueCars = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

valueCars.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern4.test(valueCars));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
// Caso 2. Vamos a extraer por un lado la parte numérica y por otro las letras
console.log( "--------> Extraer matrícula coche <--------");
const pattern5 = /(\d{4})([A-Z]{3})/;

const valueNumCars = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

valueNumCars.forEach(value => {
    console.log(' How do we extract the ' + value + '? -> ' , pattern5.exec(valueNumCars));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
//Opcionales
console.log("--------> Extraer imágenes de un fichero HTML <--------")

//Caso 1. De una sola linea extraer el contenido de src
console.log( "--------> Caso 1 - Extraer el contenido de src<--------");
const patternSrc = /(https.{1,}\.(png|jpg))/gm;

const text = ' "img src= "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" ';

console.log(' How do we extract the src ' + '? -> ' , patternSrc.exec(text));

console.log( "--------------------------------");
console.log( "--------------------------------");
// Caso 2. De un HTML extraer todos los src de todos los objetos img.
console.log( "--------> Caso 1 - Extraer todos los src <--------");
const patternSrcImg = /^<img\s?src=".{2,}\.(png|jpg)"(\s)?\/>$/gim;

const valuesRsc = ['<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>', ' <img src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"/>']

console.log(' How do we extract all the src ' + '? -> ' , patternSrcImg.exec(valuesRsc));

console.log( "--------------------------------");
console.log( "--------------------------------");
console.log("--------> Validar sintaxis tarjeta de crédito <--------")
// Caso 1. Vamos a validar los siguiente formatos.
const pattern6 = /\d{2,4}\w\d{1,5}\w\d{1,3}\w\d{1,3}/;

const valueCard = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000'];

valueCard.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern6.test(valueCard));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
// Caso 2. Vamos a extraer cada grupo de cuatro digitos.
const pattern7 = /(\d{1,3}\w)(\d{1,3}\w)(\d{1,4}\w)(\d{3})/;
const valueExtractCard = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000'];

valueExtractCard.forEach(value => {
    console.log(' How do we extract the ' + value + '? -> ' , pattern7.exec(valueExtractCard));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
// Buscar Expresiones regulares
// 1. Comprobar si una clave es fuerte o no. Una minuscula, una mayuscula, un numero y un caracter especial.
console.log( "--------> Caso 1 - Clave <--------");

const pattern8 = /\w{1,}\w{1,}\d{1,}.{1,}/;
const valueKey = ['lemonCODE2022-'];

valueKey.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern8.test(valueKey));
});

console.log( "--------------------------------");
console.log( "--------------------------------");

//2. Comprobar clave. Una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud
console.log( "--------> Caso 2 - Clave Moderada <--------");
const pattern9 = /\w{8,}\d{1,}.{1,}/;
const valueKey1 = ['lemonCODE2022-'];

valueKey1.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern9.test(valueKey1));
});

console.log( "--------------------------------");
console.log( "--------------------------------");

// Validar que una URL esta bien formada
console.log( "--------> Validar una URL <--------");

const pattern10 = /^\w{1,}.?\w{1,}.\w{3}/;
const valueURL = ['https:www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

valueURL.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern10.test(valueURL));
});

console.log( "--------------------------------");
console.log( "--------------------------------");
// Validar que un color en Hexadecimal esta bien formado.
console.log( "--------> Validar un color en Hexadecimal <--------");

const pattern11 = /.\d{1,}.?\d{1,}/;
const valueColor = ['#77a345', '(119, 163, 69)', '(119, 163, 69, 0.5)'];

valueColor.forEach(value => {
    console.log(' RegExp matchs with ' + value + '? -> ' , pattern11.test(valueColor));
});
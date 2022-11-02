// /*Name - Location - Image*/
// var nameHotel = "Ibis";
// var locationHotel = "Cadiz";
// var imgHotel = "img/hotel2.jpg";

// document.getElementById("name-Hotel").innerHTML = "Hotel " + nameHotel;
// document.getElementById("location-Hotel").innerHTML = "Ubicado en " + locationHotel;
// document.getElementById("image-Hotel").src = imgHotel;

// /*Puntuacion*/
// var rating = prompt ("Indique la puntuación del 1 al 5")
// document.getElementById("rating").innerHTML = rating + " estrellas";


// /*Reseñas*/
// var check = confirm ("¿Quiere que la reseña sea anónima?");

// document.getElementById ("check-Hotel").checked = check;

// /*Opcional*/

// var hoteles = {
//     Ibis: {
//         name: "Ibis",
//         location: "Cadiz",
//         img: "img/hotel2.jpg",
//     },
//     Iberostar: {
//         name: "Iberostar",
//         location: "La barrosa",
//         img: "img/hotelpresidente.jpg",
//     },
// };

// var selectHotel = prompt ("Indique el nombre del hotel: Ibis o Iberostar")

// document.getElementById("name-Hotel").innerHTML = hoteles[selectHotel].name;
// document.getElementById("location-Hotel").innerHTML = hoteles[selectHotel].location;
// document.getElementById("image-Hotel").src = hoteles[selectHotel].img;

/*Estrellas*/
var stars = {
    una: 
    "<span>&#9733;</span>;<span>&#9734;</span>;<span>&#9734;</span>;<span>&#9734;</span>;<span>&#9734;</span>",
    dos: "<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9734;</span>;<span>&#9734;</span>;<span>&#9734;</span>",
    tres: "<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9734;</span>;<span>&#9734;</span>",
    cuatro: "<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9734;</span>",
    cinco: "<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>;<span>&#9733;</span>",
};

var rating = prompt ("¿Cuántas estrellas?: una, dos, tres, cuatro o cinco")
document.getElementById ("stars").innerHTML = "Puntuación: " + stars[rating];
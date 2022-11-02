//Hotels
const standard = { count: 1, price: 100, type: "room" };
const junior = { count: 1, price: 120, type: "room" };
const suite = { count: 1, price: 150, type: "room" };

document.getElementById("tip_room").value;

//Nº de noches
function numNights(){
    return parseInt(document.getElementById("n_nights").value);
}

//Rooms
function rooms(){
    var numRoom = document.getElementById("tip_room").value;
    if (numRoom == "standard"){
       return standard.price
    } else if(numRoom == "junior"){
        return junior.price
    } else if(numRoom == "suite"){
        return suite.price
    }
}

//Type Rooms
function typeRooms(price){
    var typeRooms1 = document.getElementById("tp_room").value;
    if(typeRooms1 == "individual"){
        return price - (price * 0.25);
    }else if (typeRooms1 == "triple"){
        return price + (price * 0.25)
    }else{
        return price
    }
}

//Spa: Tarifa según uso de SPA
function selectSpa(){
    return document.getElementById("spa").checked == true ? 20 : 0;
}

//Parking: Tarifa noche de parking
function selectParking(){
    var numNightParking = parseInt(document.getElementById("n_parking").value)
    return numNightParking == 0 ? 0 : numNightParking * 10;
}


//Resultado Final
// function calcularTotal(){
//     var numberNights = numNights();
//     var priceRoom = rooms();
//     var priceSpa = selectSpa();
//     var roomSpa = priceRoom + priceSpa;
//     var totalDiscount = typeRooms(roomSpa());
//     var totalParking = selectParking();
//     var totalResultF = (numberNights * totalDiscount) + totalParking;
// }


//Spa individual / doble
function roomSpa(){
    return rooms() + selectSpa();
}

//Total
function calcularTotal(){
     return (numNights() * typeRooms(roomSpa())) + selectParking();
}

document.getElementById("button-rest").addEventListener("click" , submitResult);


function submitResult(){
    return document.getElementById("text-result").innerText = calcularTotal();
}

//Suma
var submitNumber1 = () => document.getElementById("input-number1").value;
var submitNumber2 = () => document.getElementById("input-number2").value;
var resultSum = () => parseInt(submitNumber1()) + parseInt(submitNumber2());

var submitSum = () => document.getElementById("text-result").innerText = resultSum();

document.getElementById("button-sum").addEventListener("click" , ifSumNumber)

// //Campo vacío: Mostrar error
function ifSumNumber(){
    if (isNaN(parseInt(submitNumber1())) || isNaN(parseInt(submitNumber2()))){
        document.getElementById("text-result").innerText = "Debes rellenar ambos campos";
        // console.log("Debes rellenar ambos campos")
    } else{
       submitSum();
    }
}


// // //Resta
// var submitNumber1 = () => document.getElementById("input-number1").value;
// var submitNumber2 = () => document.getElementById("input-number2").value;
// var resultRest = () => submitNumber1() - submitNumber2();

// var submitRest = () => document.getElementById("text-result").innerText = resultRest();

// document.getElementById("button-rest").addEventListener("click" , submitRest)

// //Multiplicación
// var submitNumber1 = () => document.getElementById("input-number1").value;
// var submitNumber2 = () => document.getElementById("input-number2").value;
// var resultMult = () => submitNumber1() * submitNumber2();

// var submitMult = () => document.getElementById("text-result").innerText = resultMult();

// document.getElementById("button-mult").addEventListener("click" , submitMult)

// // //División
// var submitNumber1 = () => document.getElementById("input-number1").value;
// var submitNumber2 = () => document.getElementById("input-number2").value;
// var resultDiv = () => submitNumber1() / submitNumber2();

// var submitDiv = () => document.getElementById("text-result").innerText = resultDiv();

// document.getElementById("button-div").addEventListener("click" , submitDiv)



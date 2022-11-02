//Calculadora Secuencial//

//Extraer el operando que hay en el input
// var submitNumber = () => document.getElementById("input-number1").value;

// //Almacenar operaciones y nuevo resultado
// var newResult = submitNumber() 

// var save = () => document.getElementById("text-save").innerText;

// function sum(){
//     var sumNumber = parseInt(submitNumber ()) + parseInt(save())
//     document.getElementById("text-save").innerText = sumNumber;
// }

// document.getElementById("button-sum").addEventListener("click" , sum)

//Resta
var save = () => document.getElementById("text-save").innerText;

var submitNumber = () => document.getElementById("input-number").value;

function rest(){
    if (save() > 0){
        var resultRest = parseInt(save()) - parseInt(submitNumber());
        document.getElementById("text-save").innerText = resultRest;
    } else{
        document.getElementById("text-save").innerText = submitNumber();
    }
}

document.getElementById("button-rest").addEventListener("click" , rest)



//Diferentes botones 

// document.getElementById("button-multi").addEventListener("click")
// document.getElementById("button-div").addEventListener("click")


//Resultado final

























































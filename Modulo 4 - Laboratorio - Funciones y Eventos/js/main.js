// //Suma
function submitNumber1(){
    return document.getElementById("input-number1").value;
}

function submitNumber2(){
    return document.getElementById("input-number2").value;
}

function resultSum(){
    return parseInt(submitNumber1()) + parseInt(submitNumber2());
}

//El resultado de la suma en text-result
function submitSum(){
    document.getElementById("text-result").innerText = resultSum();
}

// //Convertir txt a numero


// //Registrar la función resultSum como event listener de el click del botón "suma"
document.getElementById("button-sum").addEventListener("click" , submitSum)


//Resta
function submitNumber1(){
    return document.getElementById("input-number1").value;
}

function submitNumber2(){
    return document.getElementById("input-number2").value;
}

function resultRest(){
    return submitNumber1() - submitNumber2();
}

function submitRest(){
    document.getElementById("text-result").innerText = resultRest();
}

document.getElementById("button-rest").addEventListener("click" , submitRest)


// //Multiplicación
function submitNumber1(){
    return document.getElementById("input-number1").value;
}

function submitNumber2(){
    return document.getElementById("input-number2").value;
}

function resultMult(){
    return submitNumber1() * submitNumber2();
}

function submitMult(){
    document.getElementById("text-result").innerText = resultMult();
}

document.getElementById("button-mult").addEventListener("click" , submitMult)

// //División
function submitNumber1(){
    return document.getElementById("input-number1").value;
}

function submitNumber2(){
    return document.getElementById("input-number2").value;
}

function resultDiv(){
    return submitNumber1() / submitNumber2();
}

function submitDiv(){
    document.getElementById("text-result").innerText = resultDiv();
}

document.getElementById("button-div").addEventListener("click" , submitDiv)
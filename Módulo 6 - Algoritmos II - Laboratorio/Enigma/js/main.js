// Utiliza dos elementos textarea , uno que contendrá el mensaje en claro y otro con el mensaje encriptado.
// Añade también 2 botones, uno para encriptar y otro para desencriptar.

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' "; 
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";


var textEncrypted = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

var textPlain = "";



//Apuntes para recordar que esto es lo mismo que indexOf
// var searchIndex = (alphabet, letter) => {
//         for (var i=0; i < alphabet.length; i++) {
//         if(alphabet[i] === letter) return i;
//         else{
//             return -1;
//             }
//         }
// }

       
//Esta función me dice a que letra se corresponde en PlainAlphabet el alfabeto encriptado
var searchIndex = (alphabet, letter) => {
    //Acceder a la posición de un array mediante su índice
    return alphabet.indexOf(letter);
}


//------------- Función mostrar letras del mensaje -------------
var messageReceived = (message, enter , exit) => {
    //Texto mayúscula a minúscula
    var newMessage = message.toLowerCase();
    var changeMessage = "";
    
    //for .. of me va a ir dando letra a letra lo que contenga messageReceived.
    for (i=0; i < newMessage.length; i++){
    //Llamar a una función que me transforme el mensaje.
    var indexFind = searchIndex(enter , newMessage[i])
    var resultTransform = indexFind === -1 ? newMessage[i] : exit[indexFind];
    changeMessage = changeMessage + resultTransform;
    }

    return changeMessage;
}


//Enlaces a los botones y text-area
document.getElementById("button-encrypted").addEventListener("click" , encryptedResult);
document.getElementById("button-plain").addEventListener("click" , plainResult);

function encryptedResult(){
    var inputEncrypted = document.getElementById("txt-plain").value;
    var encrypted = messageReceived(inputEncrypted , encryptedAlphabet, plainAlphabet);

    return document.getElementById("txt-encrypted").innerHTML = encrypted;
}

function plainResult(){
    var inputPlain = document.getElementById("txt-encrypted").value;
    var plain = messageReceived(inputPlain , encryptedAlphabet, plainAlphabet);

    return document.getElementById("txt-plain").innerHTML = plain;
}

//1. Cuadrado. n = número (n) y char = caracter con el que vamos a pintar la figura (*)
console.log("----------------- Square ------------------------");

var square = (n, char) => { 
    for (i = 0; i < n; i++) {
        console.log(i, char);
    }
}

console.log(square(5 , "*****"));
console.log("---------------------------------------------------");

//2. Cuadrado con Borde. charBorder = B y charInner = "*"
console.log("----------------- Square With Border ------------------------");

var squareWithBorder = (n, charBorder, charInner) => {
    for (var i = 0; i < n; i++ ) {
        if ( i === 0 || i === n-1){
            console.log( i, charBorder.repeat(n) );
        }else {
            console.log( i, charBorder + charInner.repeat(n-2) + charBorder )
        }
    }
  }
  
  
console.log(squareWithBorder(5 , "b" , "*"));
console.log("---------------------------------------------------");


// // 3. Cuadrado Diagonal Left-Right. charDiagonal="\\" , charUp = "A" y charDown = "B"
console.log("----------------- Square Diagonal LR ------------------------");

/**
 * 
/AAAA
B/AAA
BB/AA
BBB/A
BBBB/

 */

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => { 

    for (i = 0; i < n; i++) {
        console.log(charDown.repeat(i) + charDiagonal.repeat((i + 1) - i) + charUp.repeat(n - i))
    }

};

console.log(squareDiagonalLR(5 , "/" , "A" , "B"));
console.log("---------------------------------------------------");

//4. Cuadrado Diagonal Right-Left
console.log("----------------- Square Diagonal RL ------------------------");

/**

AAAA/
AAA/B
AA/BB
A/BBB
/BBBB

 */

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => { 

    for (i = 0; i < n; i++) {
        console.log(charUp.repeat(n - i) + charDiagonal.repeat((i + 1) - i) + charDown.repeat(i));
    }

}

console.log(squareDiagonalRL(5 , "/" , "A" , "B"));
console.log("---------------------------------------------------");

//5. Medio Diamante
console.log("----------------- Half Diamond ------------------------");

var halfDiamond = (n, char) => { 
    for (i = 0; i < n; i++) {
        console.log(char.repeat(i + 1))
    }

    for (i = 5; i > 0; i--) {
        console.log(char.repeat(i + 1));      
    }
}   

halfDiamond(5, "*");
console.log("---------------------------------------------------");


//6. Pirámide
console.log("----------------- Pyramid ------------------------");

var pyramid = (n, char) => { 
    var space = ' ';

    for (i = 0; i < n; i++) {
        console.log(space.repeat((n - i) - 1) + char.repeat(i + 1) + char.repeat(i)); 
    }

}

pyramid(5, "*");
console.log("---------------------------------------------------");

//7. Diamant
console.log("----------------- Diamant ------------------------");
var diamond = (n, char) => { 
    var space = ' ';

    for (i = 0; i < n; i++) {
        console.log(space.repeat((n - i) - 1) + char.repeat(i + 1) + char.repeat(i)); 
    }

    for (i = n; i > 0; i--) {
        console.log(space.repeat(n - i) + char.repeat(i - 1) + char.repeat(i));      
    }
}

diamond(5, "*");
console.log("---------------------------------------------------");

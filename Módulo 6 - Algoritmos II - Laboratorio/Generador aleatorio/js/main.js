// Generador aleatorio que permita escoger, de forma aleatoria, una cantidad determinada de números
// de entre un 1 y 100.

// var max = 100 , min = 1;
// var range = max - min + 1;

var find = (n, array) => {
  let exitNumber = false;

  for (var number of array) {
    if (n === number) {
      exitNumber = true;
    }
  }

  return exitNumber;
};

var randomPick = (n, min, max) => {
  var numbers = [];
  var range = max - min + 1;

  for (var i = 0; i < n; i++) {
    var randomNumber = Math.round(Math.random() * range);

    while (find(randomNumber, numbers)) {
      var randomNumber = Math.round(Math.random() * range);
    }

    numbers.push(randomNumber);
  }

  return numbers;
};

console.log(randomPick(10, 1, 100));